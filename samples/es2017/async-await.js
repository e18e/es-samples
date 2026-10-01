/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Async Functions (async and await)
 * Provides syntactic sugar over Promises, allowing asynchronous operations to be written in a synchronous, procedural style.
 * Functions marked with `async` implicitly return a Promise, and `await` pauses execution until the Promise settles.
 * Spec: https://262.ecma-international.org/8.0/#sec-async-function-definitions
 */
export async function demoAsyncAwait(shouldSucceed = true) {
  function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve({ data: "ES2017 payload" }), 10));
  }

  try {
    const response = await fetchData();
    return response.data;
  } catch (error) {
    return "Failed to fetch";
  }
}
