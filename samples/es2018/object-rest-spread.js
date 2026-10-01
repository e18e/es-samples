/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * Rest and Spread Properties for Objects
 * Extends the rest/spread syntax (`...`) to object literals. Rest properties collect remaining own enumerable
 * properties into a new object during destructuring. Spread properties copy own enumerable properties into an object literal.
 * Spec: https://262.ecma-international.org/9.0/#sec-object-initializer
 */
export function demoObjectRestSpread() {
  const defaults = { host: "localhost", port: 8080, secure: false };
  const userConfig = { port: 3000, secure: true };
  
  // Object spread
  const merged = { ...defaults, ...userConfig };
  
  // Object rest
  const { host, ...remainingConfig } = merged;
  return { merged, host, remainingConfig };
}
