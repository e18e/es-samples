/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * Map.groupBy()
 * Groups elements of an iterable according to arbitrary keys returned by a callback function into a Map.
 * Spec: https://262.ecma-international.org/15.0/#sec-map.groupby
 */
export function demoMapGroupBy() {
  const inventory = [
    { name: "Banana", quantity: 0 },
    { name: "Cherries", quantity: 5 }
  ];
  return Map.groupBy(inventory, (item) => item.quantity === 0 ? "restock" : "ok");
}
