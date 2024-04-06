// Compact
// Lodash _.compact

// Implement a function compact(array) that creates an array with all falsey values removed.
// The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

// Empty arrays and objects are not considered falsey.

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
  const result = [];

  for (const arr of array) {
    if (arr) {
      result.push(arr);
    }
  }

  return result;
}

compact([0, 1, false, 2, "", 3, null]); // => [1, 2, 3]
compact(["hello", 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]

// Solution 2 - Here's a simpler solution that leverages Array.prototype.filter.

/**
 * @param {Array} array: The array to compact.
 * @return {Array} Returns the new array of filtered values.
 */
function compact(array) {
  return array.filter(Boolean);
}
