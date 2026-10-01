/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.difference
 * Takes a set and returns a new set containing elements in this set but not in the given set.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.difference
 */
export function demoSetDifference() {
  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);
  return Array.from(setA.difference(setB));
}
