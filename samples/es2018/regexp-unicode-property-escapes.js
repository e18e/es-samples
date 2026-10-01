/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * RegExp Unicode Property Escapes
 * Enables matching characters based on Unicode character properties inside regular expressions using `\p{...}` and `\P{...}`
 * when the `u` flag is enabled.
 * Spec: https://262.ecma-international.org/9.0/#sec-unicode-match-property-p
 */
export function demoUnicodePropertyEscapes() {
  const greekRegex = /^\p{Script=Greek}+$/u;
  const emojiRegex = /\p{Emoji}/u;
  
  return {
    isGreek: greekRegex.test("Χαίρετε"),
    hasEmoji: emojiRegex.test("Hello 🌍")
  };
}
