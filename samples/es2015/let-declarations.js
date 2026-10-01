/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * let Declarations
 * Block-scoped variable declaration. Resides in the Temporal Dead Zone until evaluation.
 * Spec: https://262.ecma-international.org/6.0/#sec-let-and-const-declarations
 */
export function demoLet() {
  let blockScopedVar = "initial";
  if (true) {
    let blockScopedVar = "shadowed inside block";
  }
  return blockScopedVar;
}
