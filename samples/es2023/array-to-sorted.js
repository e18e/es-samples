/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Array.prototype.toSorted
 * Returns a new array with the elements sorted in ascending order without mutating the original array.
 * Spec: https://262.ecma-international.org/14.0/#sec-array.prototype.tosorted
 */
export function demoArrayToSorted() {
  const original = [3, 1, 2];
  const sorted = original.toSorted((a, b) => a - b);
  return { original, sorted };
}
