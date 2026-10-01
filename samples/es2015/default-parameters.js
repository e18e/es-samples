/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Default Parameters
 * Allows formal parameters to be initialized with default values if no value or undefined is passed.
 * Spec: https://262.ecma-international.org/6.0/#sec-parameter-lists
 */
export function demoDefaultParameters(a = 10, b = 20) {
  return a + b;
}
