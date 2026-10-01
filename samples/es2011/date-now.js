/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Date.now()
 * Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.9.4.4
 */
export function demoDateNow() {
  const timestamp = Date.now();
  return typeof timestamp === "number" && timestamp > 0;
}
