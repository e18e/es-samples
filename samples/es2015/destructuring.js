/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Destructuring Assignment
 * Syntax allowing extraction of values from arrays or properties from objects into distinct variables,
 * supporting default fallback values and nested destructuring.
 * Spec: https://262.ecma-international.org/6.0/#sec-destructuring-assignment
 */
export function demoDestructuring() {
  const user = { username: "alice", role: "admin", profile: { age: 30 } };
  const [first, second, third = 3] = [10, 20];
  const { username, role: userRole, profile: { age }, missing = "default" } = user;
  
  return { first, second, third, username, userRole, age, missing };
}
