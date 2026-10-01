/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * Optional Chaining Operator (?.)
 * Allows reading the value of a property located deep within a chain of connected objects without having to
 * expressly validate that each reference in the chain is valid. If a reference is nullish, expression short-circuits to `undefined`.
 * Spec: https://262.ecma-international.org/11.0/#sec-optional-chaining-operator
 */
export function demoOptionalChaining(user) {
  const street = user?.address?.street;
  const zipCode = user?.address?.getZipCode?.();
  const firstItem = user?.orders?.[0];

  return { street, zipCode, firstItem };
}
