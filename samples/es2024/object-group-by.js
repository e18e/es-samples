/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * Object.groupBy()
 * Groups elements of an iterable according to string/symbol keys returned by a callback function.
 * Spec: https://262.ecma-international.org/15.0/#sec-object.groupby
 */
export function demoObjectGroupBy() {
  const inventory = [
    { name: "Asparagus", type: "vegetable" },
    { name: "Banana", type: "fruit" }
  ];
  return Object.groupBy(inventory, (item) => item.type);
}
