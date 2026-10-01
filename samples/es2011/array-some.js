/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.some
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.17
 */
export function demoArraySome() {
  const numbers = [1, 2, 3, 4];
  return numbers.some(n => n > 3);
}
