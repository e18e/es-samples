/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Atomics Object
 * Provides atomic operations as static methods to safely manage memory shared across threads.
 * Spec: https://262.ecma-international.org/8.0/#sec-atomics-object
 */
export function demoAtomics() {
  const buffer = new SharedArrayBuffer(16);
  const uint8 = new Uint8Array(buffer);
  Atomics.store(uint8, 0, 42);
  return Atomics.load(uint8, 0);
}
