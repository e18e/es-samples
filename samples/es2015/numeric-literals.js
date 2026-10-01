/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Binary and Octal Numeric Literals
 * Direct syntax for binary literals (`0b` or `0B` prefix) and octal literals (`0o` or `0O` prefix).
 * Spec: https://262.ecma-international.org/6.0/#sec-literals-numeric-literals
 */
export function demoNumericLiterals() {
  const binaryValue = 0b1010; // 10 in decimal
  const octalValue = 0o755;   // 493 in decimal
  return { binaryValue, octalValue };
}
