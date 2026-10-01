/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Array.prototype.toSpliced
 * Returns a new array with some elements removed and/or replaced at a given index without mutating the original array.
 * Spec: https://262.ecma-international.org/14.0/#sec-array.prototype.tospliced
 */
export function demoArrayToSpliced() {
  const original = [1, 2, 3, 4];
  const spliced = original.toSpliced(1, 2, 99);
  return { original, spliced };
}
