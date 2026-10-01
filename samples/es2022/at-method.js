/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * .at() Method on Indexable Objects (Array, String, TypedArray)
 * Takes an integer value and returns the item at that index, allowing positive integers for indexing from the start
 * and negative integers for relative indexing from the end (e.g., `-1` for the last element).
 * Spec (Array): https://262.ecma-international.org/13.0/#sec-array.prototype.at
 * Spec (String): https://262.ecma-international.org/13.0/#sec-string.prototype.at
 */
export function demoAtMethod() {
  const letters = ["A", "B", "C", "D"];
  const word = "ECMAScript";

  return {
    lastLetter: letters.at(-1),      // "D"
    secondToLast: letters.at(-2),    // "C"
    firstChar: word.at(0),           // "E"
    lastChar: word.at(-1)            // "t"
  };
}
