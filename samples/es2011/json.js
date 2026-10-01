/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Native JSON Parsing and Serialization (JSON.parse and JSON.stringify)
 * Standardizes a built-in `JSON` object for parsing JSON text strings into JavaScript objects and serializing
 * values into JSON formatted strings without relying on `eval()`.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.12
 */
export function demoJSON() {
  const data = { name: "ES5.1", year: 2011, features: ["JSON", "Strict Mode"] };
  const serialized = JSON.stringify(data);
  const parsed = JSON.parse(serialized);

  return { serialized, year: parsed.year };
}
