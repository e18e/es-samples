/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Symbol Primitive Type
 * A unique and immutable primitive value that can be used as the key of an object property to avoid naming collisions.
 * Also introduces well-known symbols like `Symbol.iterator` and `Symbol.toStringTag`.
 * Spec: https://262.ecma-international.org/6.0/#sec-symbol-objects
 */
export function demoSymbols() {
  const sym1 = Symbol("description");
  const sym2 = Symbol("description");
  const obj = {
    [sym1]: "secret value",
    [Symbol.toStringTag]: "CustomObject"
  };

  return {
    areSymbolsEqual: sym1 === sym2,
    symbolPropertyValue: obj[sym1],
    toStringTag: Object.prototype.toString.call(obj)
  };
}
