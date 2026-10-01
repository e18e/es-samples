/**
 * ECMAScript 2017 (8th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/8.0/
 */

/*
 * Trailing Commas in Function Parameter Lists and Calls
 * Allows trailing commas in function definitions and function calls, making git diffs cleaner when adding new parameters.
 * Spec: https://262.ecma-international.org/8.0/#sec-parameter-lists
 */
export function demoTrailingCommas(
  param1,
  param2,
  param3, // trailing comma in definition
) {
  return [
    param1,
    param2,
    param3, // trailing comma in array formatting/call argument
  ];
}
