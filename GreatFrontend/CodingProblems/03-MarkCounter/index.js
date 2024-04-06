// Implement a function makeCounter that accepts an optional integer value and returns a function.
// When the returned function is called initially, it returns the initial value if provided, otherwise 0.
// The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.

// Solution 1: Decrement then postfix increment

/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter(initialValue = 0) {
  let count = initialValue - 1;
  return function () {
    count += 1;
    return count;
  };
}

// Solution 2: Postfix increment

/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter2(initialValue = 0) {
  let count = initialValue;

  return () => {
    return count++;
  };
}

// Solution 3: One-liner
// Mutating a function's parameters is usually not recommended due to causing of side effects

/**
 * @param {number} value
 * @return {Function}
 */
function makeCounter3(value = 0) {
  return () => value++;
}
