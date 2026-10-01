/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * RegExp s (dotAll) Flag
 * Introduces the `s` flag for regular expressions, which alters the dot (`.`) metacharacter to match any character,
 * including line terminators (like `\n` and `\r`).
 * Spec: https://262.ecma-international.org/9.0/#sec-get-regexp.prototype.dotAll
 */
export function demoDotAllFlag() {
  const text = "first line\nsecond line";
  const withoutDotAll = /first line.second line/.test(text); // false
  const withDotAll = /first line.second line/s.test(text);   // true
  
  return { withoutDotAll, withDotAll };
}
