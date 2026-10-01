/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Function.prototype.bind()
 * Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence
 * of arguments preceding any provided when the new function is called.
 * Spec: https://262.ecma-international.org/5.1/#sec-15.3.4.5
 */
export function demoFunctionBind() {
  const moduleObj = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };

  const unboundGetX = moduleObj.getX;
  // unboundGetX() in global scope would fail or return undefined; bind ties `this` to moduleObj
  const boundGetX = unboundGetX.bind(moduleObj);

  return { boundResult: boundGetX() };
}
