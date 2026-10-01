/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Class Definitions and Inheritance
 * Introduces class syntax as syntactic sugar over prototype-based inheritance, including constructors,
 * instance methods, static methods, and `extends`/`super` for subclassing.
 * Spec: https://262.ecma-international.org/6.0/#sec-class-definitions
 */
export class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise.`;
  }
  
  static isAnimal(obj) {
    return obj instanceof Animal;
  }
}

export class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks.`;
  }
}
