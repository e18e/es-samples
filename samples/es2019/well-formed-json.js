/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Well-Formed JSON.stringify()
 * Prevents `JSON.stringify` from returning ill-formed UTF-16 strings when encountering lone surrogate code points (U+D800 to U+DFFF),
 * representing them instead as JSON escape sequences (e.g., `\ud800`).
 * Spec: https://262.ecma-international.org/10.0/#sec-json.stringify
 */
export function demoWellFormedJSON() {
  // Lone surrogate \uD800
  const serialized = JSON.stringify("\uD800");
  return serialized; // '"\\ud800"'
}
