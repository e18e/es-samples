/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * Uint8Array Base64 Encoding/Decoding
 * Methods on Uint8Array to encode bytes to Base64 (toBase64) and parse Base64 strings to bytes (fromBase64).
 * Spec: https://tc39.es/ecma262/#sec-uint8array.prototype.tobase64
 */
export function demoUint8ArrayBase64() {
  const bytes = new Uint8Array([72, 101, 108, 108, 111]);
  if (typeof bytes.toBase64 === "function" && typeof Uint8Array.fromBase64 === "function") {
    const base64Str = bytes.toBase64();
    const decoded = Uint8Array.fromBase64(base64Str);
    return { base64Str, decoded: Array.from(decoded) };
  }
  return { base64Str: Buffer.from(bytes).toString("base64"), isPolyfill: true };
}
