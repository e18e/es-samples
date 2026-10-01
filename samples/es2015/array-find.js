/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Array.prototype.find
 * Returns the first element in the provided array that satisfies the provided testing function.
 * Spec: https://262.ecma-international.org/6.0/#sec-array.prototype.find
 */
export function demoArrayFind() {
  return [10, 20, 30, 40].find(val => val > 25);
}
