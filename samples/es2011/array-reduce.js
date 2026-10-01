/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.reduce
 * Executes a user-supplied reducer callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.21
 */
export function demoArrayReduce() {
  const numbers = [1, 2, 3, 4];
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
