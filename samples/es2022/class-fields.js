/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Class Fields (Public/Private Instance & Static Fields, Private Methods)
 * Extends classes with declarative instance and static fields without requiring constructor initialization, along with
 * truly private members (fields and methods) prefixed with `#` that cannot be accessed outside the class body.
 * Spec: https://262.ecma-international.org/13.0/#sec-class-definitions
 * Spec (Private Identifiers): https://262.ecma-international.org/13.0/#sec-private-bound-identifiers
 */
export class Counter {
  // Public instance field
  name = "Default Counter";
  
  // Private instance field
  #count = 0;
  
  // Public static field
  static totalCounters = 0;
  
  constructor(name) {
    if (name) this.name = name;
    Counter.totalCounters++;
  }

  increment() {
    this.#count++;
    this.#log();
  }

  getCount() {
    return this.#count;
  }

  // Private method
  #log() {
    // Internal logging
  }
}
