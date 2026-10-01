/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Spread Syntax
 * Allows an iterable such as an array expression to be expanded in places where zero or more arguments or elements are expected.
 * Spec: https://262.ecma-international.org/6.0/#sec-array-initializer
 */
export function demoSpreadSyntax() {
  const parts = [2, 3];
  return [1, ...parts, 4];
}
