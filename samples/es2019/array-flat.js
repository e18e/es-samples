/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Array.prototype.flat()
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * Spec: https://262.ecma-international.org/10.0/#sec-array.prototype.flat
 */
export function demoArrayFlat() {
  const nested = [1, [2, [3, [4]]]];
  return nested.flat(2); // [1, 2, 3, [4]]
}
