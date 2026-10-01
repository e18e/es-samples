/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Template Literals and Tagged Templates
 * Multi-line string literals allowing embedded expressions via `${expression}` syntax, and tagged template
 * functions that allow custom parsing and formatting of template literals.
 * Spec: https://262.ecma-international.org/6.0/#sec-template-literals
 */
export function demoTemplateLiterals(name = "World", count = 5) {
  const basicTemplate = `Hello, ${name}! You have ${count} notifications.`;
  
  // Tagged template example
  function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => {
      const val = values[i] !== undefined ? `[${values[i]}]` : "";
      return acc + str + val;
    }, "");
  }
  
  const taggedResult = highlight`User ${name} has ${count} items.`;
  return { basicTemplate, taggedResult };
}
