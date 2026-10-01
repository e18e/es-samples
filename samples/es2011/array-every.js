/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.every
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.16
 */
export function demoArrayEvery() {
  const numbers = [1, 2, 3, 4];
  return numbers.every(n => n > 0);
}
