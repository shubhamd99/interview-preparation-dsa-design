// Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning.
// Elements are dropped until predicate returns falsey. Your function should not modify the original array.

/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
function dropWhile(array, predicate) {
  let index = 0;
  const lastIndex = array.length - 1;

  while (index <= lastIndex && predicate(array[index], index, array)) {
    index++;
  }

  return array.slice(index);
}

dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
dropWhile([1, 2, 3], (value) => value < 6); // => []
