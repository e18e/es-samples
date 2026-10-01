/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * String.prototype.padStart()
 * Pads the current string from the start with another string until the target length is reached.
 * Spec: https://262.ecma-international.org/8.0/#sec-string.prototype.padstart
 */
export function demoStringPadStart() {
  const cardNumber = "1234";
  return cardNumber.padStart(16, "*"); // "*******1234"
}
