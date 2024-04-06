// Implement a function maxBy(array, iteratee) that finds the element inside array with the maximum value after going through iteratee.
// The iteratee is invoked with one argument: (value).

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
function maxBy(array, iteratee) {
  let result;
  let computedValue;

  for (const value of array) {
    // The function should ignore elements where iteratee produces null or undefined.
    const currentComputedValue = iteratee(value);

    if (
      // undefined == null -> true (right)
      // null == null -> true (right)
      // undefined === null -> false (wrong)
      // null === null -> true (true)
      // that's why use == instead of ===
      currentComputedValue != null &&
      (currentComputedValue > computedValue || computedValue === undefined)
    ) {
      computedValue = currentComputedValue;
      result = value;
    }
  }

  return result;
}

maxBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 2 }
maxBy([1, 2], (o) => -o); // => 1
maxBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined
