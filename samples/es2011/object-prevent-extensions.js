/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.preventExtensions
 * Prevents new properties from ever being added to an object.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.10
 */
export function demoObjectPreventExtensions() {
  const obj = Object.preventExtensions({ key: "val" });
  return !Object.isExtensible(obj);
}
