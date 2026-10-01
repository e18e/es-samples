/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Date.prototype.toJSON
 * Returns a string representation of the Date object used for JSON serialization.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.9.5.44
 */
export function demoDateToJSON() {
  const date = new Date("2026-01-01T00:00:00Z");
  return date.toJSON();
}
