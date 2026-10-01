/**
 * ECMAScript 2019 (10th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/10.0/
 */

/*
 * Function.prototype.toString() Revision
 * Requires `Function.prototype.toString()` to return the exact source code text slice used to define the function,
 * preserving whitespace, comments, and syntax.
 * Spec: https://262.ecma-international.org/10.0/#sec-function.prototype.tostring
 */
export function demoFunctionToString() {
  function /* comment inside */ sample() { return 1; }
  return sample.toString();
}
