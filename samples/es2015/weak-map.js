/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * WeakMap Object
 * Collection of key/value pairs in which keys must be objects or non-registered symbols and are held weakly.
 * Spec: https://262.ecma-international.org/6.0/#sec-weakmap-objects
 */
export function demoWeakMap() {
  const weakMap = new WeakMap();
  let key = { name: "temp" };
  weakMap.set(key, "data");
  return weakMap.has(key);
}
