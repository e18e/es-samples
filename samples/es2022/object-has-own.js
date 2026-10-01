/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Object.hasOwn()
 * A static method that returns true if the specified object has the indicated property as its own property.
 * Serves as a safer, more concise alternative to `Object.prototype.hasOwnProperty.call(obj, prop)`.
 * Spec: https://262.ecma-international.org/13.0/#sec-object.hasown
 */
export function demoObjectHasOwn() {
  const obj = Object.create({ inheritedProp: "parent" });
  obj.ownProp = "child";

  return {
    hasOwnProp: Object.hasOwn(obj, "ownProp"),          // true
    hasInheritedProp: Object.hasOwn(obj, "inheritedProp"), // false
    hasToString: Object.hasOwn(obj, "toString")         // false
  };
}
