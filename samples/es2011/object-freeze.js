/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.freeze
 * Freezes an object, preventing new properties from being added and existing properties from being modified or removed.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.9
 */
export function demoObjectFreeze() {
  const obj = Object.freeze({ status: "locked" });
  return Object.isFrozen(obj);
}
