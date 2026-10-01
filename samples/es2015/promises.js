/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Promise Objects
 * A built-in object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * Spec: https://262.ecma-international.org/6.0/#sec-promise-objects
 */
export function demoPromise(shouldResolve = true) {
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve("Promise resolved successfully");
    } else {
      reject(new Error("Promise rejected"));
    }
  });
}
