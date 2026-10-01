/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Reflect Object
 * Built-in object providing methods for interceptable JavaScript operations mirroring Proxy handlers.
 * Spec: https://262.ecma-international.org/6.0/#sec-reflect-object
 */
export function demoReflect() {
  const obj = { a: 1 };
  Reflect.set(obj, "b", 2);
  return Reflect.get(obj, "b");
}
