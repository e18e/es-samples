/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * Promise.withResolvers()
 * A static method returning an object containing a new Promise along with its associated `resolve` and `reject`
 * functions, avoiding the boilerplate of extracting resolvers from within a `new Promise(...)` executor constructor callback.
 * Spec: https://262.ecma-international.org/15.0/#sec-promise.withresolvers
 */
export async function demoPromiseWithResolvers() {
  const { promise, resolve, reject } = Promise.withResolvers();
  
  // Resolve asynchronously outside constructor callback
  setTimeout(() => resolve("Resolved via withResolvers"), 10);
  
  const result = await promise;
  return result;
}
