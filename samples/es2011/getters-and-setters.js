/**
 * ECMAScript 5.1 (2011 Standard / ISO/IEC 16262:2011) Code Samples
 * Standard Specification: https://262.ecma-international.org/5.1/
 */

/*
 * Object Literal Getters and Setters
 * Introduces syntax for binding an object property to a function that will be invoked when that property is looked up (`get`)
 * or assigned to (`set`).
 * Spec: https://262.ecma-international.org/5.1/#sec-11.1.5
 */
export function demoGettersAndSetters() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1] || "";
    }
  };

  const initial = user.fullName; // "John Doe"
  user.fullName = "Jane Smith";
  
  return { initial, updated: user.fullName, firstName: user.firstName };
}
