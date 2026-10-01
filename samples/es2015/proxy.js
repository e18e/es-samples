/**
 * ECMAScript 2015 (6th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/6.0/
 */

/*
 * Proxy Object
 * Enables creation of a proxy for another object, intercepting and customizing fundamental operations.
 * Spec: https://262.ecma-international.org/6.0/#sec-proxy-objects
 */
export function demoProxy() {
  const target = { message: "hello" };
  const proxy = new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop].toUpperCase() : "default";
    }
  });
  return proxy.message;
}
