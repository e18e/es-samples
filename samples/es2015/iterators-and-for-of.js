/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Iterators and for...of Statement
 * Protocol for iterable objects (implementing `Symbol.iterator`) and the `for...of` loop to traverse iterable elements.
 * Spec: https://262.ecma-international.org/6.0/#sec-for-in-and-for-of-statements
 */
export function demoForOfAndIterators() {
  const iterableObject = {
    [Symbol.iterator]() {
      let step = 0;
      return {
        next() {
          step++;
          if (step <= 3) {
            return { value: `step-${step}`, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };

  const results = [];
  for (const item of iterableObject) {
    results.push(item);
  }
  return results;
}
