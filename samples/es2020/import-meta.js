/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * import.meta Meta-Property
 * An object exposing context-specific metadata to a JavaScript module, such as the URL of the current module (`import.meta.url`).
 * Spec: https://262.ecma-international.org/11.0/#sec-meta-properties
 */
export function demoImportMeta() {
  return typeof import.meta === "object" && typeof import.meta.url === "string";
}
