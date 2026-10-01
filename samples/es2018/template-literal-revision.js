/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * Template Literal Revision
 * Lifts restrictions on syntactic escape sequences within tagged template literals. Invalid escape sequences (e.g., `\unicode`)
 * result in `undefined` for string representation in `strings`, while `strings.raw` retains the raw text.
 * Spec: https://262.ecma-international.org/9.0/#sec-template-literal-lexical-components
 */
export function demoTemplateLiteralRevision() {
  function tag(strings) {
    return { cooked: strings[0], raw: strings.raw[0] };
  }
  // \unicode is an invalid hex escape sequence in standard strings, but valid inside tagged template raw arrays in ES2018+
  return tag`\unicode and \u{54}`;
}
