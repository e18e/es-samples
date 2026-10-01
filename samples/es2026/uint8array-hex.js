/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * Uint8Array Hexadecimal Encoding/Decoding
 * Methods on Uint8Array to encode bytes to hexadecimal (toHex) and parse hex strings to bytes (fromHex).
 * Spec: https://tc39.es/ecma262/#sec-uint8array.prototype.tohex
 */
export function demoUint8ArrayHex() {
  const bytes = new Uint8Array([72, 101, 108, 108, 111]);
  if (typeof bytes.toHex === "function" && typeof Uint8Array.fromHex === "function") {
    const hexStr = bytes.toHex();
    const decoded = Uint8Array.fromHex(hexStr);
    return { hexStr, decoded: Array.from(decoded) };
  }
  return { hexStr: Buffer.from(bytes).toString("hex"), isPolyfill: true };
}
