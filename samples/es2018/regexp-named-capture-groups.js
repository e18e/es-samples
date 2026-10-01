/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * RegExp Named Capture Groups
 * Allows capturing groups in regular expressions to be assigned explicit names via `(?<name>...)`, which can then be
 * accessed on the `groups` property of the match object.
 * Spec: https://262.ecma-international.org/9.0/#sec-group-specifiers
 */
export function demoNamedCaptureGroups() {
  const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
  const match = regex.exec("2018-06-15");
  
  return {
    year: match.groups.year,
    month: match.groups.month,
    day: match.groups.day
  };
}
