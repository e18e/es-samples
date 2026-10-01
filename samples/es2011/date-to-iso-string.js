/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Date.prototype.toISOString
 * Returns a string in simplified extended ISO format (ISO 8601), formatted as YYYY-MM-THH:mm:ss.sssZ.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.9.5.43
 */
export function demoDateToISOString() {
  const date = new Date("2026-01-01T00:00:00Z");
  return date.toISOString();
}
