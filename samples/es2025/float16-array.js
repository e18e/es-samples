/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Float16Array
 * TypedArray representing an array of 16-bit half-precision floating point numbers.
 * Spec: https://262.ecma-international.org/16.0/#sec-float16array
 */
export function demoFloat16Array() {
  const f16 = new Float16Array([1.5, 2.5]);
  return {
    len: f16.length,
    bytes: Float16Array.BYTES_PER_ELEMENT
  };
}
