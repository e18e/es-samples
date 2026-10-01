/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Object.getOwnPropertyDescriptors()
 * Returns all own property descriptors of a given object, enabling accurate cloning of objects including getters, setters,
 * and non-enumerable properties without losing their attributes.
 * Spec: https://262.ecma-international.org/8.0/#sec-object.getownpropertydescriptors
 */
export function demoGetOwnPropertyDescriptors() {
  const source = {
    _val: 10,
    get val() { return this._val; },
    set val(v) { this._val = v; }
  };
  
  const descriptors = Object.getOwnPropertyDescriptors(source);
  const clone = Object.defineProperties({}, descriptors);
  
  clone.val = 25;
  return { sourceVal: source.val, cloneVal: clone.val, hasGetter: typeof descriptors.val.get === "function" };
}
