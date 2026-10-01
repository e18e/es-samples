/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Array.prototype.findIndex
 * Returns the index of the first element in an array that satisfies the provided testing function.
 * Spec: https://262.ecma-international.org/6.0/#sec-array.prototype.findindex
 */
export function demoArrayFindIndex() {
  return [10, 20, 30, 40].findIndex(val => val > 25);
}
