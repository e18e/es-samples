/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Stable Array.prototype.sort()
 * Mandates that `Array.prototype.sort()` be stable, ensuring that array elements comparing equal retain their original order.
 * Spec: https://262.ecma-international.org/10.0/#sec-array.prototype.sort
 */
export function demoStableSort() {
  const items = [
    { name: "First", val: 5 },
    { name: "Second", val: 2 },
    { name: "Third", val: 5 },
    { name: "Fourth", val: 2 }
  ];
  
  items.sort((a, b) => a.val - b.val);
  // "Second" always precedes "Fourth", and "First" always precedes "Third"
  return items.map(i => i.name);
}
