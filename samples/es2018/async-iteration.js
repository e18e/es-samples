/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * Asynchronous Iteration and Async Generators
 * Introduces `async function*` for generating asynchronous sequences of data, and the `for await...of` loop
 * to iterate over async iterables (objects implementing `Symbol.asyncIterator`).
 * Spec: https://262.ecma-international.org/9.0/#sec-async-generator-function-definitions
 * Spec (for await...of): https://262.ecma-international.org/9.0/#sec-for-in-and-for-of-statements
 */
export async function* demoAsyncGenerator() {
  const data = ["first", "second", "third"];
  for (const item of data) {
    await new Promise(resolve => setTimeout(resolve, 5));
    yield item.toUpperCase();
  }
}

export async function demoAsyncIteration() {
  const results = [];
  for await (const val of demoAsyncGenerator()) {
    results.push(val);
  }
  return results;
}
