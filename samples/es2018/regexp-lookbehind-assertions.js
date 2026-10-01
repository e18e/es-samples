/**
 * ECMAScript 2018 (9th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/9.0/
 */

/*
 * RegExp Lookbehind Assertions
 * Enables positive `(?<=...)` and negative `(?<!...)` lookbehind assertions, matching a pattern only if it is (or is not)
 * preceded by a specific assertion.
 * Spec: https://262.ecma-international.org/9.0/#sec-assertions
 */
export function demoLookbehindAssertions() {
  const positiveLookbehind = /(?<=\$)\d+/; // matches numbers preceded by '$'
  const negativeLookbehind = /(?<!\$)\b\d+/; // matches numbers NOT preceded by '$'
  
  const price = positiveLookbehind.exec("Cost is $100");
  const quantity = negativeLookbehind.exec("Bought 50 items");
  
  return { price: price[0], quantity: quantity[0] };
}
