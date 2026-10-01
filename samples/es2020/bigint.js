/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * BigInt Arbitrary-Precision Integers
 * Introduces a new numeric primitive type `BigInt` for representing integers of arbitrary magnitude,
 * bypassing Number.MAX_SAFE_INTEGER limitations. Created via `n` suffix or `BigInt()` function.
 * Spec: https://262.ecma-international.org/11.0/#sec-bigint-objects
 * Spec (Literals): https://262.ecma-international.org/11.0/#sec-numeric-literals
 */
export function demoBigInt() {
  const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
  const largeInteger = 9007199254740991n + 10n;
  const product = largeInteger * 2n;
  
  return {
    largeIntegerString: largeInteger.toString(),
    productString: product.toString(),
    isBigInt: typeof largeInteger === "bigint"
  };
}
