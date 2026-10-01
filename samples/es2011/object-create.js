/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object.create
 * Creates a new object, using an existing object as the prototype of the newly created object.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.2.3.5
 */
export function demoObjectCreate() {
  const proto = { greeting: "hello" };
  const obj = Object.create(proto);
  return obj.greeting;
}
