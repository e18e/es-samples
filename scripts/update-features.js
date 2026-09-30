import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { features } from 'web-features';
import { loadManifest, generateMarkdown } from './build-features.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../');
const manifestPath = path.join(projectRoot, 'features.json');
const require = createRequire(import.meta.url);

/**
 * Attempt to load the TypeScript compiler and locate its `lib/` directory.
 * Checks local node_modules first, then falls back to global/sibling installations if available.
 */
function loadTypeScript() {
  const candidates = [
    'typescript',
    path.resolve(projectRoot, '../npmx.dev/node_modules/typescript'),
    path.resolve(projectRoot, '../polyfill-analyzer/node_modules/typescript'),
    path.resolve(projectRoot, '../baseline-browser-mapping/node_modules/typescript')
  ];

  for (const candidate of candidates) {
    try {
      const tsPath = require.resolve(candidate);
      const ts = require(tsPath);
      const libDir = path.dirname(tsPath);
      if (fs.existsSync(path.join(libDir, 'lib.es5.d.ts'))) {
        return { ts, libDir };
      }
    } catch {
      // Try next candidate
    }
  }
  return null;
}

function getLibOrder(file) {
  const name = file.replace(/^lib\.|\.d\.ts$/g, '');
  if (name === 'es5') return 5;
  const m = name.match(/^es(\d{4})/);
  if (m) return parseInt(m[1], 10);
  if (name.startsWith('esnext')) return 9999;
  return 10000;
}

/**
 * Parses all `lib.es*.d.ts` files in TypeScript's `lib/` directory to build a dynamic
 * lookup index mapping global symbols and interface members to their granular TS `lib` ID.
 */
function buildTypeScriptLibIndex(ts, libDir) {
  const libFiles = fs
    .readdirSync(libDir)
    .filter(
      f =>
        f.startsWith('lib.es') &&
        f.endsWith('.d.ts') &&
        !f.endsWith('.full.d.ts') &&
        f !== 'lib.es6.d.ts'
    )
    .sort((a, b) => {
      const ordA = getLibOrder(a);
      const ordB = getLibOrder(b);
      if (ordA !== ordB) return ordA - ordB;
      return a.localeCompare(b);
    });

  const memberToLib = new Map();
  const varToLib = new Map();
  const ifaceToLib = new Map();

  for (const file of libFiles) {
    const libName = file.replace(/^lib\.|\.d\.ts$/g, '');
    // Skip umbrella files (e.g., es2015, es2022, esnext) that only contain <reference lib="..." />
    if (/^es(\d{4}|next)$/.test(libName)) continue;

    const content = fs.readFileSync(path.join(libDir, file), 'utf8');
    const sf = ts.createSourceFile(file, content, ts.ScriptTarget.ESNext, true);

    function visit(node) {
      if (ts.isInterfaceDeclaration(node) && node.name) {
        const ifaceName = node.name.text;
        if (!ifaceToLib.has(ifaceName)) ifaceToLib.set(ifaceName, libName);
        for (const member of node.members) {
          let mName = null;
          if (
            member.name &&
            (ts.isIdentifier(member.name) || ts.isStringLiteral(member.name))
          ) {
            mName = member.name.text;
          }
          if (mName) {
            const key = `${ifaceName}.${mName}`;
            if (!memberToLib.has(key)) memberToLib.set(key, libName);
          }
        }
      } else if (ts.isVariableStatement(node)) {
        for (const decl of node.declarationList.declarations) {
          if (ts.isIdentifier(decl.name)) {
            const vName = decl.name.text;
            if (!varToLib.has(vName)) varToLib.set(vName, libName);
          }
        }
      } else if (
        (ts.isClassDeclaration(node) || ts.isModuleDeclaration(node)) &&
        node.name &&
        ts.isIdentifier(node.name)
      ) {
        const cName = node.name.text;
        if (!varToLib.has(cName)) varToLib.set(cName, libName);
      }
      ts.forEachChild(node, visit);
    }
    visit(sf);
  }

  return { memberToLib, varToLib, ifaceToLib };
}

/**
 * Resolves the granular TypeScript `lib` identifier for a feature entry using the
 * TypeScript `lib.*.d.ts` AST index.
 */
function resolveDynamicTsLib(item, tsIndex) {
  if (!tsIndex) return item.tsLib;
  const { memberToLib, varToLib, ifaceToLib } = tsIndex;
  const ck = item.compatKey || '';

  if (ck === 'javascript.builtins.WeakMap.symbol_as_keys') {
    return memberToLib.get('WeakKeyTypes.symbol') || item.tsLib;
  }
  if (
    ck === 'javascript.builtins.globalThis' ||
    ck === 'javascript.operators.import_meta'
  ) {
    return 'es5';
  }
  if (ck.startsWith('javascript.builtins.')) {
    const parts = ck.split('.');
    const obj = parts[2];
    const member = parts[3];
    if (member) {
      return (
        memberToLib.get(`${obj}Constructor.${member}`) ||
        memberToLib.get(`${obj}.${member}`) ||
        null
      );
    } else if (obj) {
      return (
        varToLib.get(obj) ||
        ifaceToLib.get(`${obj}Constructor`) ||
        ifaceToLib.get(obj) ||
        null
      );
    }
  }
  return item.tsLib;
}

/**
 * Builds reverse lookup map of BCD compatKey -> web-features ID and status.
 */
function buildBcdToWebFeaturesMap() {
  const bcdToWfMap = new Map();
  for (const [featId, feat] of Object.entries(features)) {
    if (feat.compat_features) {
      for (const ck of feat.compat_features) {
        bcdToWfMap.set(ck, {
          featId,
          feature: feat,
          status: feat.status?.by_compat_key?.[ck] || feat.status
        });
      }
    }
  }
  return bcdToWfMap;
}

/**
 * Finds newly added or untracked non-Intl JavaScript features in `web-features`
 * that do not yet have a corresponding entry in `features.json`.
 */
function findUntrackedJsFeatures(manifest) {
  const trackedWfIds = new Set(manifest.map(m => m.webFeatureId));
  const trackedCompatKeys = new Set(manifest.map(m => m.compatKey));
  const untracked = [];

  for (const [wfId, feat] of Object.entries(features)) {
    if (!feat.compat_features || feat.discouraged) continue;
    const jsKeys = feat.compat_features.filter(
      k => k.startsWith('javascript.') && !k.startsWith('javascript.builtins.Intl')
    );
    if (jsKeys.length === 0) continue;

    const isTracked =
      trackedWfIds.has(wfId) || jsKeys.some(k => trackedCompatKeys.has(k));
    if (!isTracked) {
      untracked.push({
        wfId,
        name: feat.name,
        baseline: feat.status?.baseline ?? false,
        newlyAvailable: feat.status?.baseline_low_date || 'Limited availability',
        sampleCompatKey: jsKeys[0]
      });
    }
  }
  return untracked;
}

export function updateFeatures() {
  const manifest = loadManifest();
  const bcdToWfMap = buildBcdToWebFeaturesMap();
  const tsLoaded = loadTypeScript();
  const tsIndex = tsLoaded
    ? buildTypeScriptLibIndex(tsLoaded.ts, tsLoaded.libDir)
    : null;

  if (tsLoaded) {
    console.log(`✔ Loaded TypeScript v${tsLoaded.ts.version} from ${tsLoaded.libDir}`);
  } else {
    console.warn('⚠️ TypeScript not found locally; skipping dynamic lib/*.d.ts introspection.');
  }

  const changes = [];

  for (const item of manifest) {
    // 1. Sync webFeatureId if web-features maps this compatKey to a newer/more specific feature ID
    if (item.compatKey && bcdToWfMap.has(item.compatKey)) {
      const resolvedWfId = bcdToWfMap.get(item.compatKey).featId;
      if (resolvedWfId && resolvedWfId !== item.webFeatureId) {
        changes.push(
          `[${item.id}] webFeatureId: '${item.webFeatureId}' -> '${resolvedWfId}'`
        );
        item.webFeatureId = resolvedWfId;
      }
    }

    // 2. Sync TypeScript tsLib dynamically from TypeScript's lib/*.d.ts files
    if (tsIndex) {
      const resolvedTsLib = resolveDynamicTsLib(item, tsIndex);
      if (resolvedTsLib !== item.tsLib) {
        changes.push(
          `[${item.id}] tsLib: ${JSON.stringify(item.tsLib)} -> ${JSON.stringify(resolvedTsLib)}`
        );
        item.tsLib = resolvedTsLib;
      }
    }
  }

  // Write updated features.json if any metadata fields changed
  if (changes.length > 0) {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    console.log(`✔ Updated features.json with ${changes.length} metadata change(s):`);
    for (const c of changes) {
      console.log(`  - ${c}`);
    }
  } else {
    console.log('✔ features.json metadata is up to date.');
  }

  // Always regenerate FEATURES.md (recalculates Baseline Newly/Widely available dates from web-features)
  generateMarkdown(manifest);

  // Append summary to GITHUB_STEP_SUMMARY when running in GitHub Actions
  if (process.env.GITHUB_STEP_SUMMARY) {
    const untracked = findUntrackedJsFeatures(manifest);
    let summary = `## 🔄 Weekly ECMAScript Features & Baseline Sync\n\n`;
    if (changes.length > 0) {
      summary += `### Updated Metadata in \`features.json\`\n`;
      for (const c of changes) {
        summary += `- \`${c}\`\n`;
      }
      summary += `\n`;
    } else {
      summary += `- No structural ID or TypeScript \`lib\` changes in \`features.json\`.\n`;
      summary += `- Re-evaluated all Baseline Newly/Widely Available dates in \`FEATURES.md\`.\n\n`;
    }

    const recentUntracked = untracked.filter(
      u => u.newlyAvailable === 'Limited availability' || u.newlyAvailable >= '2024-01-01'
    );
    if (recentUntracked.length > 0) {
      summary += `### 📋 Newer/Upcoming JS Features in \`web-features\` Not Yet in \`es-samples\`\n\n`;
      summary += `| web-features ID | Name | Baseline Status | Primary BCD Key |\n`;
      summary += `| :--- | :--- | :--- | :--- |\n`;
      for (const u of recentUntracked) {
        summary += `| \`${u.wfId}\` | ${u.name} | ${u.newlyAvailable} | \`${u.sampleCompatKey}\` |\n`;
      }
      summary += `\n`;
    }
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary, 'utf8');
  }

  return { changes };
}

if (process.argv[1] && process.argv[1].endsWith('update-features.js')) {
  updateFeatures();
}
