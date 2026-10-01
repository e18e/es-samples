/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * Logical Assignment Operators (||=, &&=, and ??=)
 * Combines logical operations with assignment. The assignment only occurs if the logical condition evaluates to
 * trigger evaluation of the right-hand side (short-circuiting assignment).
 * Spec: https://262.ecma-international.org/12.0/#sec-logical-assignment-operators
 */
export function demoLogicalAssignment() {
  let a = 0;
  a ||= 10; // Assigns 10 because 0 is falsy
  
  let b = "hello";
  b &&= b.toUpperCase(); // Assigns "HELLO" because b is truthy
  
  let c = null;
  c ??= "default"; // Assigns "default" because c is nullish
  
  return { a, b, c };
}
