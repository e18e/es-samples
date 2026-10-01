/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * Dynamic Import (import())
 * Function-like syntax allowing asynchronous, on-demand module loading at runtime, returning a Promise that resolves
 * to the module namespace object.
 * Spec: https://262.ecma-international.org/11.0/#sec-import-calls
 */
export async function demoDynamicImport() {
  // Dynamically importing ES2015 sample module
  const es2015Module = await import("../es2015.js");
  return typeof es2015Module.add === "function";
}
