/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.isDisjointFrom
 * Takes a set and returns a boolean indicating if this set has no elements in common with the given set.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.isdisjointfrom
 */
export function demoSetIsDisjointFrom() {
  const setA = new Set([1, 2]);
  const setB = new Set([3, 4]);
  return setA.isDisjointFrom(setB);
}
