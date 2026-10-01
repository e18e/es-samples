/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * Promise.try()
 * Wraps synchronous or asynchronous function execution inside a Promise, ensuring that any exceptions thrown synchronously
 * are caught and converted into a rejected Promise rather than terminating execution synchronously.
 * Spec: https://262.ecma-international.org/16.0/#sec-promise.try
 */
export async function demoPromiseTry(shouldThrowSync = false) {
  function possiblySyncOperation() {
    if (shouldThrowSync) {
      throw new Error("Synchronous failure");
    }
    return "Success value";
  }

  try {
    const res = await Promise.try(possiblySyncOperation);
    return { success: res };
  } catch (err) {
    return { error: err.message };
  }
}
