/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Array.prototype.findLast()
 * Iterates through an array in reverse order to find the value of the first element satisfying the predicate.
 * Spec: https://262.ecma-international.org/14.0/#sec-array.prototype.findlast
 */
export function demoArrayFindLast() {
  const numbers = [5, 12, 50, 130, 44, 130];
  return numbers.findLast(n => n > 100); // 130
}
