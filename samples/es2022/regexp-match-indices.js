/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * RegExp Match Indices (d flag)
 * Introduces the `/.../d` regex flag, which instructs regex execution methods (`exec`, `matchAll`) to include an `indices`
 * array property on the match object detailing the start and end character positions of each matched group.
 * Spec: https://262.ecma-international.org/13.0/#sec-get-regexp.prototype.hasindices
 */
export function demoMatchIndices() {
  const regex = /foo(?<bar>bar)?/d;
  const match = regex.exec("foo bar foobar");

  return {
    fullMatchBounds: match.indices[0],       // [8, 14] for "foobar"
    groupBounds: match.indices[1],           // [11, 14] for "bar"
    namedGroupBounds: match.indices.groups.bar // [11, 14]
  };
}
