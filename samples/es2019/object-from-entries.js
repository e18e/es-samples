/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Object.fromEntries()
 * Transforms a list of key-value pairs (such as a Map or an array of `[key, value]` arrays) into an object.
 * Acts as the inverse of `Object.entries()`.
 * Spec: https://262.ecma-international.org/10.0/#sec-object.fromentries
 */
export function demoObjectFromEntries() {
  const entries = [["name", "Alice"], ["age", 28], ["city", "Seattle"]];
  const obj = Object.fromEntries(entries);
  
  // Filtering an object using Object.entries and Object.fromEntries
  const scores = { math: 95, history: 80, science: 92 };
  const highScores = Object.fromEntries(
    Object.entries(scores).filter((entry) => entry[1] >= 90)
  );
  
  return { obj, highScores };
}
