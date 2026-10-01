/**
 * ECMAScript 2020 (11th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/11.0/
 */

/*
 * Nullish Coalescing Operator (??)
 * A logical operator returning its right-hand operand when its left-hand operand is `null` or `undefined`,
 * and otherwise returning its left-hand operand. Avoids overriding valid falsy values like `0` or `""`.
 * Spec: https://262.ecma-international.org/11.0/#sec-nullish-coalescing-operator
 */
export function demoNullishCoalescing() {
  const count = 0;
  const text = "";
  const missing = null;

  return {
    countResult: count ?? 10,       // 0 (whereas count || 10 is 10)
    textResult: text ?? "default",  // "" (whereas text || "default" is "default")
    missingResult: missing ?? "N/A" // "N/A"
  };
}
