/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * RegExp.escape()
 * A static method that escapes special regular expression syntax characters within a string, allowing user-supplied
 * literal text to be safely incorporated into dynamically constructed regular expressions without regex injection risks.
 * Spec: https://tc39.es/ecma262/#sec-regexp.escape
 */
export function demoRegExpEscape() {
  const userInput = "Hello [World] (test)* +$?^|\\";
  
  if (typeof RegExp.escape === "function") {
    const escaped = RegExp.escape(userInput);
    const regex = new RegExp(escaped);
    return { escaped, matches: regex.test(userInput) };
  }
  
  // Demonstrating the pattern behavior if polyfilled or running on older runtime
  const fallbackEscape = (str) => str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
  const escaped = fallbackEscape(userInput);
  return { escaped, matches: new RegExp(escaped).test(userInput), isPolyfill: true };
}
