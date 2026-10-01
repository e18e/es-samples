/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * Promise.allSettled()
 * Returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects
 * describing the outcome (`status: "fulfilled" | "rejected"`) of each promise.
 * Spec: https://262.ecma-international.org/11.0/#sec-promise.allsettled
 */
export async function demoPromiseAllSettled() {
  const promises = [
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
  ];

  const results = await Promise.allSettled(promises);
  return results;
}
