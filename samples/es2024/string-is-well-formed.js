/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * String.prototype.isWellFormed
 * Returns a boolean indicating whether this string contains any lone surrogates.
 * Spec: https://262.ecma-international.org/15.0/#sec-string.prototype.iswellformed
 */
export function demoStringIsWellFormed() {
  const wellFormed = "Hello";
  const illFormed = "Hello \uD800";
  return {
    wellFormedCheck: wellFormed.isWellFormed(),
    illFormedCheck: illFormed.isWellFormed()
  };
}
