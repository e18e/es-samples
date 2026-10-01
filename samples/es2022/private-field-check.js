/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Private Field Check Syntax (#field in object)
 * Allows checking whether a specific private field or method is present on an object using the `in` operator,
 * without throwing a TypeError when checking arbitrary objects.
 * Spec: https://262.ecma-international.org/13.0/#sec-relational-operators
 */
export class SecureBox {
  #token = "secret";

  static hasToken(obj) {
    return #token in obj;
  }
}
