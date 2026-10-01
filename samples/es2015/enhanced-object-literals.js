/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Enhanced Object Literals
 * Syntactic enhancements for object initializers including property value shorthand, method definition shorthand,
 * and computed property names.
 * Spec: https://262.ecma-international.org/6.0/#sec-object-initializer
 */
export function demoEnhancedObjectLiterals(id, name) {
  const dynamicKey = "status_" + id;
  return {
    id, // property shorthand for id: id
    name,
    [dynamicKey]: "active", // computed property name
    getSummary() { // method shorthand for getSummary: function()
      return `${this.name} (${this.id})`;
    }
  };
}
