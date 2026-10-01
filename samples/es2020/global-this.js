/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * globalThis
 * Provides a universal standard mechanism to access the global `this` value across different JavaScript environments
 * (e.g., `window` in browser, `global` in Node.js, `self` in Web Workers).
 * Spec: https://262.ecma-international.org/11.0/#sec-globalthis
 */
export function demoGlobalThis() {
  return typeof globalThis !== "undefined" && globalThis === Object(globalThis);
}
