/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.forEach
 * Executes a provided function once for each array element.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.18
 */
export function demoArrayForEach() {
  const items = ["a", "b", "c"];
  const result = [];
  items.forEach(item => result.push(item.toUpperCase()));
  return result;
}
