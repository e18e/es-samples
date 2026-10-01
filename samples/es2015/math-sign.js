/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Math.sign
 * Returns the sign of a number, indicating whether the number is positive, negative or zero.
 * Spec: https://262.ecma-international.org/6.0/#sec-math.sign
 */
export function demoMathSign() {
  return {
    pos: Math.sign(5),
    neg: Math.sign(-5),
    zero: Math.sign(0)
  };
}
