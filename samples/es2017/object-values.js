/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Object.values()
 * Returns an array of a given object's own enumerable string-keyed property values.
 * Spec: https://262.ecma-international.org/8.0/#sec-object.values
 */
export function demoObjectValues() {
  const user = { name: "Bob", role: "Developer", experience: 5 };
  return Object.values(user); // ["Bob", "Developer", 5]
}
