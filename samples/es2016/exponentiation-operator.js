/**
 * ECMAScript 2016 (7th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/7.0/
 */

/*
 * Exponentiation Operator (** and **=)
 * An infix operator for exponentiation, providing a cleaner shorthand for `Math.pow(base, exponent)`.
 * Spec: https://262.ecma-international.org/7.0/#sec-exp-operator
 */
export function demoExponentiationOperator() {
  const base = 2;
  const power = 10;
  const result = base ** power; // 1024
  
  let compound = 3;
  compound **= 3; // 27
  
  return { result, compound };
}
