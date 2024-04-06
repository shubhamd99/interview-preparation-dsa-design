// Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.
// The function should ignore elements where iteratee produces null or undefined.

/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
function minBy(array, iteratee) {
  let result;
  let computed;

  for (const arr of array) {
    const current = iteratee(arr);
    if (current != null && (current < computed || computed === undefined)) {
      computed = current;
      result = arr;
    }
  }

  return result;
}
