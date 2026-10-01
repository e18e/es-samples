/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Symbol.prototype.description
 * A read-only property returning the optional string description specified when creating a Symbol object, directly
 * without requiring `.toString()` conversion.
 * Spec: https://262.ecma-international.org/10.0/#sec-symbol.prototype.description
 */
export function demoSymbolDescription() {
  const sym = Symbol("custom identifier");
  return sym.description; // "custom identifier"
}
