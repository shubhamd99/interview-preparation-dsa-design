// Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.

// This question is a simple one that involve two parts, summing up the numbers in the array then dividing by the number of items in the array.

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
function mean(array) {
  let total = 0;

  for (const value of array) {
    total += value;
  }

  // Calculate the mean from the sum.
  return total / array.length; // 0 / 0 will give NaN in JS
}

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns the mean.
 */
function mean2(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
mean([]); // => NaN
