/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Object.entries()
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 * Spec: https://262.ecma-international.org/8.0/#sec-object.entries
 */
export function demoObjectEntries() {
  const user = { name: "Bob", role: "Developer", experience: 5 };
  return Object.entries(user); // [["name", "Bob"], ["role", "Developer"], ["experience", 5]]
}
