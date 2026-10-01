/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * String.prototype.toWellFormed
 * Returns a string where any lone surrogate code points in this string are replaced with the Unicode replacement character U+FFFD.
 * Spec: https://262.ecma-international.org/15.0/#sec-string.prototype.towellformed
 */
export function demoStringToWellFormed() {
  const illFormed = "Hello \uD800 World";
  return illFormed.toWellFormed();
}
