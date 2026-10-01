/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Rest Parameters
 * Allows a function to accept an indefinite number of arguments as an array.
 * Spec: https://262.ecma-international.org/6.0/#sec-rest-parameters
 */
export function demoRestParameters(first, ...rest) {
  return { first, rest };
}
