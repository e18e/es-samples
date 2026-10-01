/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Array.prototype.toReversed
 * Returns a new array with the elements in reversed order without mutating the original array.
 * Spec: https://262.ecma-international.org/14.0/#sec-array.prototype.toreversed
 */
export function demoArrayToReversed() {
  const original = [1, 2, 3];
  const reversed = original.toReversed();
  return { original, reversed };
}
