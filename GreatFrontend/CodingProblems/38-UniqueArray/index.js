// Implement a function uniqueArray that takes in an array and returns a duplicate-free version of the array
// where only the first occurrence of each element is kept.
// The order of result values is determined by the order they occur in the array.

/**
 * @param {Array} array
 * @return {Array}
 */
function uniqueArray(array) {
  const set = new Set();

  array.forEach((item) => {
    set.add(item);
  });

  return Array.from(set);
}

uniqueArray([1, 2, 3]); // [1, 2, 3]
uniqueArray([1, 1, 2]); // [1, 2]
uniqueArray([2, 1, 2]); // [2, 1]
