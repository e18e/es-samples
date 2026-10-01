/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.isSubsetOf
 * Takes a set and returns a boolean indicating if all elements of this set are in the given set.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.issubsetof
 */
export function demoSetIsSubsetOf() {
  const setA = new Set([1, 2]);
  const setB = new Set([1, 2, 3]);
  return setA.isSubsetOf(setB);
}
