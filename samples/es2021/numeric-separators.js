/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * Numeric Separators
 * Allows underscores (`_`) as visual separators within numeric literals (decimal, binary, hex, octal, BigInt)
 * to enhance readability of large numbers without affecting programmatic values.
 * Spec: https://262.ecma-international.org/12.0/#sec-literal-numeric-separators
 */
export function demoNumericSeparators() {
  const oneBillion = 1_000_000_000;
  const hexBytes = 0xFF_EC_DE_5E;
  const bigIntAmount = 9_000_000_000_000_000n;
  
  return { oneBillion, hexBytes, bigIntAmountString: bigIntAmount.toString() };
}
