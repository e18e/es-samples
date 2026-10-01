/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * AggregateError
 * Represents an error when several errors need to be wrapped in a single error object.
 * Spec: https://262.ecma-international.org/12.0/#sec-aggregate-error-objects
 */
export async function demoAggregateError() {
  const rejections = [Promise.reject(new Error("Fail A")), Promise.reject(new Error("Fail B"))];
  try {
    await Promise.any(rejections);
  } catch (err) {
    return {
      isAggregateError: err instanceof AggregateError,
      errorCount: err.errors.length
    };
  }
}
