/**
 * ECMAScript 2016 (7th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/7.0/
 */

/*
 * Array.prototype.includes()
 * Determines whether an array includes a certain value among its entries, returning true or false.
 * Unlike `indexOf() !== -1`, `includes()` correctly compares `NaN` values using SameValueZero equality.
 * Spec: https://262.ecma-international.org/7.0/#sec-array.prototype.includes
 */
export function demoArrayIncludes() {
  const numbers = [1, 2, 3, NaN, 5];
  
  const includesThree = numbers.includes(3);
  const includesSeven = numbers.includes(7);
  const includesNaN = numbers.includes(NaN); // true, whereas numbers.indexOf(NaN) is -1
  
  return { includesThree, includesSeven, includesNaN };
}
