/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.keys
 * Returns an array of a given object's own enumerable property names.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.14
 */
export function demoObjectKeys() {
  const obj = { a: 1, b: 2, c: 3 };
  return Object.keys(obj);
}
