#!/usr/bin/env node
/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Hashbang Grammar (#!)
 * Standardizes syntax stripping for executable scripts starting with `#!` (hashbang/shebang) on the very first line
 * of a source file, allowing JavaScript files to run directly in Unix-like CLI environments without syntax errors.
 * Note: Notice the `#!/usr/bin/env node` at line 1 of this file demonstrating this syntax!
 * Spec: https://262.ecma-international.org/14.0/#sec-hashbang
 */
export const hashbangDemo = "This file begins with a valid ES2023 hashbang comment on line 1.";
