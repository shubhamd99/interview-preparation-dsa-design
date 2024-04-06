// Implement a function setCancellableTimeout, that acts like setTimeout but instead of returning a timer ID,
// it returns a function that when called, cancels the pending callback function.
// The setCancellableTimeout function should have the exact same signature as setTimeout:

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
function setCancellableTimeout(...args) {
  const timeout = setTimeout(...args);

  return () => {
    clearTimeout(timeout);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.
