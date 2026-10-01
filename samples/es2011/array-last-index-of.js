/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.lastIndexOf
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.15
 */
export function demoArrayLastIndexOf() {
  const numbers = [1, 2, 3, 2, 1];
  return numbers.lastIndexOf(2);
}
