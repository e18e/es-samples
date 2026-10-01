/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Strict Mode ("use strict")
 * Introduces a restricted variant of JavaScript that eliminates silent errors by throwing exceptions, disables features
 * that are confusing or poorly thought out, and simplifies variable resolution (e.g., forbidding implicit global creation).
 * Spec: https://262.ecma-international.org/5.1/#sec-10.1.1
 */
export function demoStrictMode() {
  "use strict";
  try {
    // In strict mode, assigning to an undeclared variable throws a ReferenceError instead of creating a global
    eval("undeclaredGlobalVar = 42;");
    return false;
  } catch (error) {
    return error instanceof ReferenceError;
  }
}
