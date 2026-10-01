/**
 * ECMAScript 2021 (12th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/12.0/
 */

/*
 * FinalizationRegistry
 * Provides a way to register custom cleanup callbacks to be invoked after an object is garbage collected.
 * Spec: https://262.ecma-international.org/12.0/#sec-finalization-registry-objects
 */
export function demoFinalizationRegistry() {
  const registry = new FinalizationRegistry(heldValue => {
    // Cleanup action
  });
  let target = { data: "valuable" };
  registry.register(target, "token");
  return typeof registry.register === "function";
}
