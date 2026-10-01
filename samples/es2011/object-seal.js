/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.seal
 * Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.8
 */
export function demoObjectSeal() {
  const obj = Object.seal({ status: "sealed" });
  return Object.isSealed(obj);
}
