/**
 * ECMAScript 2024 (15th Edition) Code Samples
 * Standard Specification: https://262.ecma-international.org/15.0/
 */

/*
 * Atomics.waitAsync()
 * Asynchronous version of `Atomics.wait()`, returning a Promise that resolves when a shared memory location is notified or times out.
 * Non-blocking, making it safe for use on the main browser UI thread where synchronous `Atomics.wait()` is disallowed.
 * Spec: https://262.ecma-international.org/15.0/#sec-atomics.waitasync
 */
export async function demoAtomicsWaitAsync() {
  const sab = new SharedArrayBuffer(1024);
  const int32 = new Int32Array(sab);
  
  // Non-blocking wait for index 0 to change from initial value 0
  const waitResult = Atomics.waitAsync(int32, 0, 0, 50); // 50ms timeout
  
  // We don't notify, so it should time out and resolve to "timed-out"
  const outcome = await waitResult.value;
  return outcome;
}
