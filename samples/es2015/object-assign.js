/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Object.assign
 * Copies all enumerable own properties from one or more source objects to a target object.
 * Spec: https://262.ecma-international.org/6.0/#sec-object.assign
 */
export function demoObjectAssign() {
  return Object.assign({}, { a: 1 }, { b: 2 });
}
