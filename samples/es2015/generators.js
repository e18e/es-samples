/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Generator Functions and yield Statement
 * Functions defined with `function*` that can be paused and resumed using the `yield` keyword, returning a Generator object
 * that conforms to both the iterable and iterator protocols.
 * Spec: https://262.ecma-international.org/6.0/#sec-generator-function-definitions
 */
export function* demoGenerator(start = 1, end = 3) {
  for (let i = start; i <= end; i++) {
    yield i * 10;
  }
}
