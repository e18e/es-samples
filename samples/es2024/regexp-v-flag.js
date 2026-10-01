/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * RegExp v Flag (Unicode Sets)
 * An upgrade over the `u` flag (`/pattern/v`) that enables set notation and operations within character classes,
 * supporting string properties, difference (`--`), and intersection (`&&`) of Unicode sets.
 * Spec: https://262.ecma-international.org/15.0/#sec-get-regexp.prototype.unicodeSets
 */
export function demoRegExpVFlag() {
  // Matching Greek characters except for the letter alpha using set difference `--`
  const nonAlphaGreek = /^[\p{Script=Greek}--\u03B1]+$/v;
  
  // Matching string properties like RGI emoji flag sequences
  const emojiFlagRegex = /^\p{RGI_Emoji_Flag_Sequence}$/v;
  
  return {
    matchesBeta: nonAlphaGreek.test("\u03B2"),  // true (beta)
    matchesAlpha: nonAlphaGreek.test("\u03B1"), // false (alpha subtracted)
    matchesFlag: emojiFlagRegex.test("🇺🇸")      // true
  };
}
