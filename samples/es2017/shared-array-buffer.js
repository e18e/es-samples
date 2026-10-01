/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * SharedArrayBuffer
 * Used to represent a generic, fixed-length raw binary data buffer that can be shared across worker threads.
 * Spec: https://262.ecma-international.org/8.0/#sec-sharedarraybuffer-objects
 */
export function demoSharedArrayBuffer() {
  const sab = new SharedArrayBuffer(1024);
  return sab.byteLength === 1024;
}
