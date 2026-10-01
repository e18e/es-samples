/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * WeakSet Object
 * Collection of garbage-collectable objects held weakly.
 * Spec: https://262.ecma-international.org/6.0/#sec-weakset-objects
 */
export function demoWeakSet() {
  const weakSet = new WeakSet();
  let obj = { name: "temp" };
  weakSet.add(obj);
  return weakSet.has(obj);
}
