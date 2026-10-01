/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Top-Level Await
 * Enables the use of `await` directly at the top level of an ES module outside of any async function, pausing module evaluation
 * and dependency graph resolution until the awaited Promise settles.
 * Spec: https://262.ecma-international.org/13.0/#sec-module-evaluation
 */
export const topLevelAwaitDemo = Promise.resolve("Resolved at top level in ES module");
