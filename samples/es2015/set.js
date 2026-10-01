/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Set Object
 * Collection of unique values of any type.
 * Spec: https://262.ecma-international.org/6.0/#sec-set-objects
 */
export function demoSet() {
  const set = new Set([1, 2, 2, 3]);
  return set.size === 3 && set.has(2);
}
