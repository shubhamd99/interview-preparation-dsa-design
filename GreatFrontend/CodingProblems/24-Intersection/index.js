// Implement a JavaScript function intersection(arrays) that takes multiple arrays as input
// and returns a new array containing the unique values that are present in all given arrays SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
function intersection(...arrays) {
  if (arrays.length === 0) {
    return [];
  }

  const set = new Set(arrays[0]);

  // Start from second array
  for (let i = 1; i < arrays.length; i++) {
    set.forEach((value) => {
      if (!arrays[i].includes(value)) {
        set.delete(value);
      }
    });
  }

  return Array.from(set); // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

console.log(intersection(arr1, arr2, arr3)); // => [3]

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
