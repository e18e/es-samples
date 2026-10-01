/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * String.prototype.trim()
 * Strips leading and trailing whitespace from strings.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.5.4.20
 */
export function demoStringTrim() {
  const raw = "   ES5.1 String   ";
  return raw.trim(); // "ES5.1 String"
}
