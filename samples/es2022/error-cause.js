/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Error Cause (Error.prototype.cause)
 * Allows specifying an underlying error cause via the `{ cause: err }` options object passed to Error constructors,
 * aiding error chaining and debugging across async architectural layers.
 * Spec: https://262.ecma-international.org/13.0/#sec-error-message-options
 */
export function demoErrorCause() {
  try {
    throw new TypeError("Database timeout");
  } catch (originalError) {
    const wrappedError = new Error("Failed to load user profile", { cause: originalError });
    return {
      message: wrappedError.message,
      causeMessage: wrappedError.cause.message
    };
  }
}
