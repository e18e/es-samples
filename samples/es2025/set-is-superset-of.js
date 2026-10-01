/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.isSupersetOf
 * Takes a set and returns a boolean indicating if all elements of the given set are in this set.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.issupersetof
 */
export function demoSetIsSupersetOf() {
  const setA = new Set([1, 2, 3]);
  const setB = new Set([1, 2]);
  return setA.isSupersetOf(setB);
}
