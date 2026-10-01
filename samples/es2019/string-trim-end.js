/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * String.prototype.trimEnd()
 * Removes whitespace from the end of a string.
 * Spec: https://262.ecma-international.org/10.0/#sec-string.prototype.trimend
 */
export function demoStringTrimEnd() {
  const padded = "   ECMAScript 2019   ";
  return padded.trimEnd();
}
