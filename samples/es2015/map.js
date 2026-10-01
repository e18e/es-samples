/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Map Object
 * Key-value collection supporting arbitrary key types including objects and primitives.
 * Spec: https://262.ecma-international.org/6.0/#sec-map-objects
 */
export function demoMap() {
  const map = new Map();
  const keyObj = { id: 1 };
  map.set(keyObj, "metadata");
  return map.has(keyObj) && map.get(keyObj) === "metadata";
}
