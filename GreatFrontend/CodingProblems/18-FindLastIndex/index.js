// Implement a function findLastIndex(array, predicate, [fromIndex=array.length-1]) that takes an array of values,
// a function predicate, and an optional fromIndex number argument,
// and returns the index of the last element in the array that satisfies the provided testing function predicate.
// The elements of the array are iterated from right to left.

/**
 * This function returns the index of the last element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  const length = array.length;
  const startIndex =
    fromIndex < 0
      ? Math.max(length + fromIndex, 0) // Negative case handling should be within the array range.
      : Math.min(fromIndex, length - 1); // Out-of-bounds case handling: `fromIndex` should not exceed the array length.

  for (let index = startIndex; index >= 0; index--) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

const arr = [5, 4, 3, 2, 1];

// Search for the last value in the array that is greater than 3 and return the index.
findLastIndex(arr, (num) => num > 3); // => 1

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num > 1, 3); // => 3

// Start searching from index 3 (inclusive).
findLastIndex(arr, (num) => num < 1, 3); // => -1
