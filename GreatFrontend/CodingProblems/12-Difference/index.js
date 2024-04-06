// Difference

// Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
function difference(array, values) {
  if (!Array.isArray(values) || values.length < 1) {
    return array;
  }

  const result = [];

  for (const arr of array) {
    if (!values.includes(arr)) {
      result.push(arr);
    }
  }

  return result;
}

difference([1, 2, 3], [2, 3]); // => [1]
difference([1, 2, 3, 4], [2, 3, 1]); // => [4]
difference([1, 2, 3], [2, 3, 1, 4]); // => []
difference([1, , 3], [1]); // => [3]
difference([1, 2, 3], []); // => [1, 2, 3]

// Solution 2 - The set can also be omitted by using Array.prototype.includes instead.
function difference2(array, values) {
  return array.filter((value) => !values.includes(value));
}

// Solution 3 - With Set
function difference3(array, values) {
  const result = [];

  // Create a set of all the values in the values arrays.
  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Check if the value is in the values set.
    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }

  return result;
}

// Solution 4 - Here's a simpler solution that leverages Array.prototype.filter and checking of the set.
function difference4(array, values) {
  const valuesSet = new Set(values);
  return array.filter((value) => !valuesSet.has(value));
}
