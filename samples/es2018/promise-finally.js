/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * Promise.prototype.finally()
 * Registers a callback to be invoked when a Promise settles (either fulfilled or rejected), enabling cleanup operations
 * without having to duplicate callbacks in both `.then()` and `.catch()`.
 * Spec: https://262.ecma-international.org/9.0/#sec-promise.prototype.finally
 */
export function demoPromiseFinally() {
  let cleanupRun = false;
  return new Promise((resolve) => {
    resolve("success");
  })
  .finally(() => {
    cleanupRun = true;
  })
  .then(res => ({ result: res, cleanupRun }));
}
