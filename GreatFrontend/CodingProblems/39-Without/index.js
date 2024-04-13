// Implement a function without(array, values) that creates an array of array values not included in the values
// specified using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.
// Lodash _.without

/**
 * @param {Array} array - Array from which the same items as in `values` are to be removed.
 * @param {...*} values - Values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
function without(array, ...values) {
  const set = new Set(array);

  values.forEach((value) => {
    if (set.has(value)) {
      set.delete(value);
    }
  });

  console.log(Array.from(set));
  return Array.from(set);
}

without([1, 2, 3], 2, 3); // => [1]
without([1, 2, 3], 2, 3, 1, 4); // => []
without(["a", "b", "c", "a"], "a", "b"); // => ['c']
// The function should return the original array values if no values is specified.
without([1, 2, 3]); // => [1, 2, 3]
