/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Array.prototype.reduceRight
 * Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.4.4.22
 */
export function demoArrayReduceRight() {
  const words = ["a", "b", "c"];
  return words.reduceRight((acc, curr) => acc + curr, "");
}
