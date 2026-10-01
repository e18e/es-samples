/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * ArrayBuffer.prototype.transfer
 * Creates a new ArrayBuffer with the same byte content as this buffer, then detaches this buffer.
 * Spec: https://262.ecma-international.org/15.0/#sec-arraybuffer.prototype.transfer
 */
export function demoArrayBufferTransfer() {
  const buffer = new ArrayBuffer(8);
  const newBuffer = buffer.transfer(16);
  return {
    isDetached: buffer.detached,
    newLength: newBuffer.byteLength
  };
}
