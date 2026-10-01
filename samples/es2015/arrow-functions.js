/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Arrow Function Definitions
 * Provides a concise syntax for anonymous functions using the `=>` token. Arrow functions lexically bind
 * `this`, `arguments`, `super`, and `new.target` from their enclosing scope rather than defining their own.
 * Spec: https://262.ecma-international.org/6.0/#sec-arrow-function-definitions
 */
export const add = (a, b) => a + b;
export const createPoint = (x, y) => ({ x, y });
export const lexicalThisDemo = () => {
  const context = {
    value: 100,
    getValueLater: function() {
      return () => this.value;
    }
  };
  return context.getValueLater()();
};
