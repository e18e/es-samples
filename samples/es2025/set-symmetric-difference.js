/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.symmetricDifference
 * Takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.symmetricdifference
 */
export function demoSetSymmetricDifference() {
  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);
  return Array.from(setA.symmetricDifference(setB));
}
