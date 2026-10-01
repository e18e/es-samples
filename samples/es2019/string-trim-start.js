/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * String.prototype.trimStart()
 * Removes whitespace from the beginning (start) of a string.
 * Spec: https://262.ecma-international.org/10.0/#sec-string.prototype.trimstart
 */
export function demoStringTrimStart() {
  const padded = "   ECMAScript 2019   ";
  return padded.trimStart();
}
