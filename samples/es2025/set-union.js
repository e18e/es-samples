/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.union
 * Takes a set and returns a new set containing elements present in either or both sets.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.union
 */
export function demoSetUnion() {
  const setA = new Set([1, 2]);
  const setB = new Set([2, 3]);
  return Array.from(setA.union(setB));
}
