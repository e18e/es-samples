/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Iterator Helpers (Iterator.from, map, filter, take, drop, flatMap, reduce, toArray, some, every, find)
 * Extends iterator objects with functional programming methods similar to Array prototype methods, enabling lazy,
 * memory-efficient processing of potentially infinite sequences without intermediate array allocations.
 * Spec: https://262.ecma-international.org/16.0/#sec-iterator-objects
 * Spec (map): https://262.ecma-international.org/16.0/#sec-iterator.prototype.map
 * Spec (take): https://262.ecma-international.org/16.0/#sec-iterator.prototype.take
 */
export function demoIteratorHelpers() {
  function* infiniteNumbers() {
    let n = 1;
    while (true) yield n++;
  }

  // Create iterator and pipeline lazy transformations
  const result = infiniteNumbers()
    .filter(n => n % 2 === 0) // even numbers: 2, 4, 6, 8, 10...
    .map(n => n * 10)         // multiplied: 20, 40, 60, 80...
    .drop(1)                  // drop first: 40, 60, 80...
    .take(3)                  // take three: 40, 60, 80
    .toArray();               // [40, 60, 80]

  return result;
}
