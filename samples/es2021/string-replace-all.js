/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * String.prototype.replaceAll()
 * Returns a new string with all matches of a pattern (either a string or a RegExp with `g` flag) replaced by a replacement.
 * Eliminates the need for regular expressions when replacing literal string occurrences globally.
 * Spec: https://262.ecma-international.org/12.0/#sec-string.prototype.replaceall
 */
export function demoReplaceAll() {
  const quote = "To be or not to be, that is the question.";
  const replaced = quote.replaceAll("be", "code");
  
  return replaced; // "To code or not to code, that is the question."
}
