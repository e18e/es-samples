/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Object.is
 * Determines whether two values are the same value, correctly evaluating NaN and signed zeros.
 * Spec: https://262.ecma-international.org/6.0/#sec-object.is
 */
export function demoObjectIs() {
  return {
    nanCheck: Object.is(NaN, NaN),
    zeroCheck: Object.is(+0, -0)
  };
}
