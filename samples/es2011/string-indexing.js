/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * String Property Access (Bracket Notation)
 * Standardizes character access via square bracket notation (str[index]) as an alternative to charAt(index).
 * Spec: https://262.ecma-international.org/5.1/#sec-15.5.5.2
 */
export function demoStringIndexing() {
  const str = "ES5.1";
  return str[0]; // "E"
}
