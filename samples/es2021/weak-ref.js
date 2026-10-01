/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * WeakRef
 * Holds a weak reference to an object, allowing it to be garbage collected without preventing reclamation.
 * Spec: https://262.ecma-international.org/12.0/#sec-weak-ref-objects
 */
export function demoWeakRef() {
  let target = { data: "valuable" };
  const ref = new WeakRef(target);
  const retrieved = ref.deref();
  return retrieved?.data === "valuable";
}
