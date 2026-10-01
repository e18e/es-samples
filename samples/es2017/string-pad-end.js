/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * String.prototype.padEnd()
 * Pads the current string from the end with another string until the target length is reached.
 * Spec: https://262.ecma-international.org/8.0/#sec-string.prototype.padend
 */
export function demoStringPadEnd() {
  const tableCell = "Total";
  return tableCell.padEnd(10, "."); // "Total....."
}
