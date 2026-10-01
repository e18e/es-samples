/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Set.prototype.intersection
 * Takes a set and returns a new set containing elements in both this set and the given set.
 * Spec: https://262.ecma-international.org/16.0/#sec-set.prototype.intersection
 */
export function demoSetIntersection() {
  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);
  return Array.from(setA.intersection(setB));
}
