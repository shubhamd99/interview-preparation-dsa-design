// Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID,
// it returns a function that when called, cancels the interval.
// The setCancellableInterval function should have the exact same signature as setInterval:

// setCancellableInterval(callback);
// setCancellableInterval(callback, delay);
// setCancellableInterval(callback, delay, param1);
// setCancellableInterval(callback, delay, param1, param2);
// setCancellableInterval(callback, delay, param1, param2, /* … ,*/ paramN);

// Solution 1: Return a function that calls clearInterval

/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
function setCancellableInterval(callback, delay, ...args) {
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
}, 10);
// t = 10: i is 1
// t = 20: i is 2
cancel(); // Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.

// Solution 2: Maintain a cancelled flag (non-optimal)

function setCancellableInterval2(callback, delay, ...args) {
  let cancelled = false;
  setInterval(() => {
    if (cancelled) {
      return;
    }

    callback(...args);
  }, delay);

  return () => {
    cancelled = true;
  };
}
