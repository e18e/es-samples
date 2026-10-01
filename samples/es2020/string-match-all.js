/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * String.prototype.matchAll()
 * Returns an iterator of all results matching a string against a regular expression (which must have the `g` flag),
 * including capturing groups for each match.
 * Spec: https://262.ecma-international.org/11.0/#sec-string.prototype.matchall
 */
export function demoMatchAll() {
  const regex = /test(\d+)/g;
  const str = "test1 and test2 and test3";
  
  const matches = [...str.matchAll(regex)];
  return matches.map(m => ({ fullMatch: m[0], group: m[1], index: m.index }));
}
