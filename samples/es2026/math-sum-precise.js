/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * Math.sumPrecise()
 * Computes the exact floating-point sum of an iterable of numbers without losing precision from intermediate floating-point
 * rounding errors, implementing compensated summation techniques.
 * Spec: https://tc39.es/ecma262/#sec-math.sumprecise
 */
export function demoMathSumPrecise() {
  // A classic floating point rounding error: 0.1 + 0.2 != 0.3
  const numbers = [0.1, 0.2];

  if (typeof Math.sumPrecise === "function") {
    return {
      exactSum: Math.sumPrecise(numbers),
      standardSum: numbers.reduce((a, b) => a + b, 0)
    };
  }

  return {
    standardSum: numbers.reduce((a, b) => a + b, 0),
    note: "Math.sumPrecise not yet native in runtime; demoing standard sum comparison."
  };
}
