/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * ArrayBuffer.prototype.resize
 * Resizes the ArrayBuffer to the specified size in bytes.
 * Spec: https://262.ecma-international.org/15.0/#sec-arraybuffer.prototype.resize
 */
export function demoArrayBufferResize() {
  const buffer = new ArrayBuffer(8, { maxByteLength: 32 });
  buffer.resize(16);
  return buffer.byteLength;
}
