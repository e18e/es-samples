/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Number.isInteger
 * Determines whether the passed value is an integer.
 * Spec: https://262.ecma-international.org/6.0/#sec-number.isinteger
 */
export function demoNumberIsInteger() {
  return {
    isInt: Number.isInteger(42.0),
    isFloat: Number.isInteger(42.5)
  };
}
