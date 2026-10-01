/**
 * ECMAScript 2026 (17th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/17.0/
 */

/*
 * Atomics.pause()
 * A micro-architectural CPU instruction hint for spinlocks and busy-waiting loops in multithreaded environments.
 * Signals to the processor that the thread is in a spin-wait loop, reducing power consumption and memory bus contention.
 * Spec: https://tc39.es/ecma262/#sec-atomics.pause
 */
export function demoAtomicsPause() {
  const isSupported = typeof Atomics.pause === "function";
  if (isSupported) {
    // In a real spin-lock loop: while(!flag) { Atomics.pause(); }
    Atomics.pause();
  }
  return { isSupported };
}
