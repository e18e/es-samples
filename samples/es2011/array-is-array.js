/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.isArray
 * Determines whether the passed value is an Array.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.3.2
 */
export function demoArrayIsArray() {
  return {
    isArray: Array.isArray([1, 2, 3]),
    isNotArray: Array.isArray({ a: 1 })
  };
}
