/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Import Attributes (import ... with { type: 'json' })
 * Provides inline syntax for specifying module import assertions/attributes using the `with` keyword, informing runtime
 * module loaders how to interpret loaded resources (e.g., verifying a file is parsed as JSON rather than executed as code).
 * Spec: https://262.ecma-international.org/16.0/#sec-import-attributes
 */
export async function demoImportAttributes() {
  try {
    const pkg = await import("../../package.json", { with: { type: "json" } });
    return pkg.default?.name ?? "es-samples";
  } catch {
    return "es-samples";
  }
}
