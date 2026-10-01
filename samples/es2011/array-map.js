/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.map
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.19
 */
export function demoArrayMap() {
  const numbers = [1, 2, 3];
  return numbers.map(n => n * 2);
}
