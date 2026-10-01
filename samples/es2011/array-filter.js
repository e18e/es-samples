/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.filter
 * Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.20
 */
export function demoArrayFilter() {
  const numbers = [1, 2, 3, 4, 5];
  return numbers.filter(n => n % 2 === 0);
}
