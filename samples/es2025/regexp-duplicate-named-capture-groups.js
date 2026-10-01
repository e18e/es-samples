/**
 * ECMAScript 2025 (16th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/16.0/
 */

/*
 * RegExp Duplicate Named Capture Groups
 * Allows multiple capture groups in different alternatives of a regular expression (separated by `|`) to share the exact
 * same group name (`(?<name>...)`), simplifying pattern matching across mutually exclusive branch formats.
 * Spec: https://262.ecma-international.org/16.0/#sec-group-specifiers
 */
export function demoDuplicateNamedCaptureGroups() {
  // Both branch options use the group name 'year'
  const regex = /(?<year>\d{4})-[a-z]+|[a-z]+-(?<year>\d{4})/i;
  
  const match1 = regex.exec("2025-june");
  const match2 = regex.exec("june-2025");

  return {
    firstFormatYear: match1.groups.year,  // "2025"
    secondFormatYear: match2.groups.year  // "2025"
  };
}
