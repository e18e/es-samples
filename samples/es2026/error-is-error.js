/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * Error.isError()
 * A static method that reliably detects whether a value is an Error instance (including built-in errors, custom subclasses,
 * and DOMException objects), working across different realms (iframes, worker threads, VM contexts) where `instanceof Error` fails.
 * Spec: https://tc39.es/ecma262/#sec-error.iserror
 */
export function demoErrorIsError() {
  const standardError = new TypeError("Test error");
  const nonError = { message: "Looks like error, but isn't" };

  if (typeof Error.isError === "function") {
    return {
      standardCheck: Error.isError(standardError), // true
      nonErrorCheck: Error.isError(nonError)       // false
    };
  }

  return {
    standardCheck: standardError instanceof Error,
    nonErrorCheck: nonError instanceof Error,
    isPolyfill: true
  };
}
