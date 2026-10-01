/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Number.isNaN
 * Determines whether the passed value is NaN without type coercion.
 * Spec: https://262.ecma-international.org/6.0/#sec-number.isnan
 */
export function demoNumberIsNaN() {
  return {
    isNaNNumber: Number.isNaN(NaN),
    isNotNaNStr: Number.isNaN("NaN")
  };
}
