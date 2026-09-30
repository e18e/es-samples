import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { features } from 'web-features';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../');

const manifestPath = path.join(projectRoot, 'features.json');
const markdownPath = path.join(projectRoot, 'FEATURES.md');

// Build reverse lookup map of BCD key -> { featId, status }
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

export function loadManifest() {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`features.json not found at ${manifestPath}`);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Validate feature sample files exist
  for (const entry of manifest) {
    if (entry.sampleFile) {
      const fullPath = path.join(projectRoot, entry.sampleFile);
      if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ Warning: Sample file '${entry.sampleFile}' referenced by feature '${entry.name}' does not exist.`);
      }
    }
  }
  return manifest;
}

function escapeTableCell(text) {
  if (!text) return '';
  return String(text).replace(/\|/g, '\\|');
}

function getBcdGithubUrl(compatKey) {
  if (!compatKey || !compatKey.startsWith('javascript.')) return null;
  const parts = compatKey.split('.');
  let relPath;
  if (parts[1] === 'builtins' && parts[2]) {
    relPath = `javascript/builtins/${parts[2]}.json`;
  } else if (parts[1]) {
    relPath = `javascript/${parts[1]}.json`;
  } else {
    relPath = 'javascript.json';
  }
  return `https://github.com/mdn/browser-compat-data/blob/main/${relPath}`;
}

function getBaselineInfo(compatKey, webFeatureId) {
  if (compatKey === 'javascript.statements.strict_mode' || webFeatureId === 'strict-mode') {
    return {
      resolvedWfId: 'strict-mode',
      newlyAvailable: 'Pre-Baseline (Universal Support)*',
      widelyAvailable: 'Pre-Baseline (Universal Support)*'
    };
  }

  let status = null;
  let resolvedWfId = webFeatureId;

  if (bcdToWfMap.has(compatKey)) {
    const bcd = bcdToWfMap.get(compatKey);
    status = bcd.status;
    if (bcd.featId) resolvedWfId = bcd.featId;
  } else if (features[webFeatureId] || features[`${webFeatureId}s`]) {
    resolvedWfId = features[webFeatureId] ? webFeatureId : `${webFeatureId}s`;
    status = features[resolvedWfId]?.status;
  }

  if (!status || status.baseline === false || !status.baseline_low_date) {
    return {
      resolvedWfId,
      newlyAvailable: 'Limited availability',
      widelyAvailable: 'Limited availability'
    };
  }

  const newlyAvailable = status.baseline_low_date;
  const d = new Date(`${newlyAvailable}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + 30);
  const widelyAvailable = d.toISOString().split('T')[0];

  return { resolvedWfId, newlyAvailable, widelyAvailable };
}

function getEsYear(esVer) {
  if (!esVer) return 9999;
  const match = esVer.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 9999;
}

function getWidelyAvailableCategory(widelyAvailable) {
  if (!widelyAvailable) return { rank: 2, value: '' };
  const wa = String(widelyAvailable).trim();
  if (wa.toLowerCase().includes('pre-baseline')) {
    return { rank: 0, value: wa };
  }
  if (wa.toLowerCase().includes('limited availability')) {
    return { rank: 2, value: wa };
  }
  return { rank: 1, value: wa };
}

function compareFeatures(a, b) {
  const infoA = getBaselineInfo(a.compatKey, a.webFeatureId);
  const infoB = getBaselineInfo(b.compatKey, b.webFeatureId);

  const catA = getWidelyAvailableCategory(infoA.widelyAvailable);
  const catB = getWidelyAvailableCategory(infoB.widelyAvailable);

  if (catA.rank !== catB.rank) {
    return catA.rank - catB.rank;
  }

  if (catA.rank === 1 && catA.value !== catB.value) {
    return catA.value.localeCompare(catB.value);
  }

  const yearA = getEsYear(a.esVersion);
  const yearB = getEsYear(b.esVersion);
  if (yearA !== yearB) {
    return yearA - yearB;
  }

  return a.name.localeCompare(b.name);
}

function formatDescription(desc) {
  if (!desc) return '';
  let trimmed = desc.trim();
  trimmed = trimmed.replace(/[,;:]$/, '');
  if (!/[.!?…]$/.test(trimmed)) {
    trimmed += '.';
  }
  return escapeTableCell(trimmed);
}

export function formatTsBehavior(item) {
  const behavior = item.tsBelowTargetBehavior;
  const helpers = Array.isArray(item.tsHelpers) && item.tsHelpers.length > 0
    ? item.tsHelpers.map(h => `\`${escapeTableCell(h)}\``).join(', ')
    : '';

  if (behavior === 'downlevel-helper') {
    return helpers ? `Downlevel (${helpers})` : 'Downlevel (Helper)';
  }
  if (behavior === 'downlevel-syntax') {
    return 'Downlevel (Syntax)';
  }
  if (behavior === 'compiler-error') {
    return 'Compiler Error';
  }
  return 'Untouched';
}

export function generateMarkdown(manifest) {
  let md = `# ECMAScript Language Features Index\n\n`;
  md += `A comprehensive breakdown of ECMAScript language features showcased across the executable code samples in \`es-samples\` (ES2011/ES5.1 through ES2026), cross-referenced with MDN [browser-compat-data](https://github.com/mdn/browser-compat-data), Baseline web feature identifiers on [webstatus.dev](https://webstatus.dev), and TypeScript (\`tsconfig.json\`) \`target\` / \`lib\` behavior.\n\n`;
  md += `| Feature Name | Category | Description | ES Edition | MDN Compat Key | web-features Identifier | Baseline Newly available | Baseline Widely available | Baseline Year Match | TS Target | TS Lib | TS Below-Target Behavior |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- | :--- | :--- |\n`;

  const sortedManifest = [...manifest].sort(compareFeatures);
  const displayCategoryMap = { syntax: 'Syntax', method: 'Method', api: 'API' };

  for (const item of sortedManifest) {
    const { resolvedWfId, newlyAvailable, widelyAvailable } = getBaselineInfo(item.compatKey, item.webFeatureId);

    const displayCompatKey = item.compatKey ? item.compatKey.replace(/^\./, '').replace(/\./g, '.`<br>`') : '';
    const escapedCompatKey = escapeTableCell(displayCompatKey);
    const bcdUrl = getBcdGithubUrl(item.compatKey);
    const compatKeyLink = bcdUrl ? `[\`${escapedCompatKey}\`](${bcdUrl})` : `\`${escapedCompatKey}\``;

    const targetWfId = resolvedWfId || item.webFeatureId;
    const escapedWfId = escapeTableCell(targetWfId);
    const webLink = `[\`${escapedWfId}\`](https://webstatus.dev/features/${targetWfId})`;

    const rawName = escapeTableCell(item.name);
    const name = rawName.includes('*') || rawName.includes('`') ? rawName : `**${rawName}**`;
    const nameLink = item.sampleFile ? `[${name}](${item.sampleFile})` : name;

    const categoryDisplay = displayCategoryMap[item.category] || 'Syntax';
    const description = formatDescription(item.description);
    const esVersion = escapeTableCell(item.esVersion);

    const esYear = getEsYear(item.esVersion);
    const newlyYearMatch = newlyAvailable.match(/\b\d{4}\b/);
    const newlyYear = newlyYearMatch ? parseInt(newlyYearMatch[0], 10) : null;

    const isPreBaseline = String(newlyAvailable).toLowerCase().includes('pre-baseline');
    let matchBadge = '❌';
    if (isPreBaseline) {
      matchBadge = '❎';
    } else if (esYear !== 9999 && newlyYear !== null) {
      if (newlyYear === esYear) {
        matchBadge = '✅';
      } else if (newlyYear < esYear) {
        matchBadge = '⚡';
      } else if (newlyYear > esYear) {
        matchBadge = '🐢';
      }
    }

    const tsTargetDisplay = item.tsTarget ? `\`${escapeTableCell(item.tsTarget)}\`` : '—';
    const tsLibDisplay = item.tsLib ? `\`${escapeTableCell(item.tsLib)}\`` : '—';
    const tsBehaviorDisplay = formatTsBehavior(item);

    md += `| ${nameLink} | ${categoryDisplay} | ${description} | ${esVersion} | ${compatKeyLink} | ${webLink} | ${newlyAvailable} | ${widelyAvailable} | ${matchBadge} | ${tsTargetDisplay} | ${tsLibDisplay} | ${tsBehaviorDisplay} |\n`;
  }

  md += `\n\* *Features marked "Pre-Baseline (Universal Support)" (such as ES5.1 Strict Mode) have been universally supported across all major browsers since before Baseline tracking began in 2015.*\n`;

  fs.writeFileSync(markdownPath, md, 'utf8');
  console.log(`✔ Generated FEATURES.md successfully (${manifest.length} features listed).`);
}

if (process.argv[1] && process.argv[1].endsWith('build-features.js')) {
  const manifest = loadManifest();
  generateMarkdown(manifest);
}
