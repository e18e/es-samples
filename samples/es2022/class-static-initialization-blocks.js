/**
 * ECMAScript 2022 (13th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/13.0/
 */

/*
 * Class Static Initialization Blocks
 * Introduces `static { ... }` blocks within class bodies to evaluate complex static initialization logic with access
 * to private static/instance fields of the class.
 * Spec: https://262.ecma-international.org/13.0/#sec-class-static-initialization-blocks
 */
export class ConfigManager {
  static #secretKey;
  static isInitialized = false;
  
  static {
    try {
      this.#secretKey = "INIT_KEY_" + Math.random().toString(36).slice(2, 6);
      this.isInitialized = true;
    } catch {
      this.isInitialized = false;
    }
  }

  static getSecretLength() {
    return this.#secretKey?.length ?? 0;
  }
}
