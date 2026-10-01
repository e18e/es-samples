/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Array.prototype.with
 * Returns a new array with the element at the given index replaced with the given value without mutating the original array.
 * Spec: https://262.ecma-international.org/14.0/#sec-array.prototype.with
 */
export function demoArrayWith() {
  const original = ["a", "b", "c"];
  const replaced = original.with(1, "z");
  return { original, replaced };
}
