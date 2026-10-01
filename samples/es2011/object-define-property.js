/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.defineProperty
 * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.6
 */
export function demoObjectDefineProperty() {
  const obj = {};
  Object.defineProperty(obj, "readOnlyProp", {
    value: "cannot change",
    writable: false,
    enumerable: true,
    configurable: false
  });
  return obj.readOnlyProp;
}
