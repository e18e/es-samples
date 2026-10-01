/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Optional Catch Binding
 * Allows omitting the exception binding variable in `catch` blocks when the thrown error object is not needed.
 * Spec: https://262.ecma-international.org/10.0/#sec-try-statement
 */
export function demoOptionalCatchBinding(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch { // No error parameter required
    return { error: "Invalid JSON format" };
  }
}
