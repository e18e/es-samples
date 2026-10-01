/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Array.prototype.flatMap()
 * Maps each element using a mapping function, then flattens the result into a new array by depth 1.
 * Spec: https://262.ecma-international.org/10.0/#sec-array.prototype.flatmap
 */
export function demoArrayFlatMap() {
  const sentences = ["hello world", "ECMAScript 2019"];
  return sentences.flatMap(s => s.split(" ")); // ["hello", "world", "ECMAScript", "2019"]
}
