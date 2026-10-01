/**
 * ECMAScript 2023 (14th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/14.0/
 */

/*
 * Symbols as WeakMap and WeakSet Keys
 * Expands `WeakMap` keys and `WeakSet` values to allow non-registered Symbol primitives (symbols created with `Symbol()`
 * rather than `Symbol.for()`) in addition to object references, since non-registered symbols have unique identities.
 * Spec: https://262.ecma-international.org/14.0/#sec-weakmap-objects
 */
export function demoSymbolsAsWeakKeys() {
  const weakMap = new WeakMap();
  const keySymbol = Symbol("weakKey");
  
  weakMap.set(keySymbol, "associated metadata");
  
  return {
    hasKey: weakMap.has(keySymbol),
    value: weakMap.get(keySymbol)
  };
}
