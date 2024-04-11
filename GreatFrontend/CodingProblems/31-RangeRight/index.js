// Implement a function rangeRight([start=0], end, [step=1]) that creates an array of numbers progressing from start up to (but not including) end with a specified step,
// similar to range, but in a descending order.

// Lodash _.range
// Lodash _.rangeRight

// Edge Case: To handle cases where start and step are not specified but end is negative, we can add an if statement to change the value of step to -1.

// Solution 1: Solution 1: Use unshift() to push elements from the front of the result array
// Here is a solution that generates the range of sequence from start to (but not including) end with step as increment using unshift() instead of push().

/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
function rangeRight(start = 0, end, step = 1) {
  let result = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (end < start && step === 1) {
    step = -1;
  }

  let length = (end - start) / (step || 1);

  for (let idx = 0; idx < length; idx++) {
    result.unshift(start + idx * step);
  }

  return result;
}

// Solution 2: Insert elements from the back normally, but reverse the final result array
// However, since unshift() has a time complexity of O(N),
// here is a more efficient solution that reverses the result array after pushing the values into the array normally.

function rangeRight2(start, end = undefined, step = 1) {
  let result = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (end < start && step === 1) {
    step = -1;
  }

  // Determine the number of elements in `result`
  const length = (end - start) / (step || 1);

  // Generate the range
  for (let i = 0; i < length; i++) {
    result.push(start + i * step);
  }

  return result.reverse();
}

console.log(rangeRight(4)); // => [3, 2, 1, 0]
console.log(rangeRight(-4)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 5)); // => [4, 3, 2, 1]
console.log(rangeRight(0, 20, 5)); // => [15, 10, 5, 0]
console.log(rangeRight(0, -4, -1)); // => [-3, -2, -1, 0]
console.log(rangeRight(1, 4, 0)); // => [1, 1, 1]
// The function should return an empty array if start is equal to end.
console.log(rangeRight(0)); // => []
console.log(rangeRight(1, 8, 9)); // [1]

console.log(rangeRight2(4)); // => [3, 2, 1, 0]
console.log(rangeRight2(-4)); // => [-3, -2, -1, 0]
console.log(rangeRight2(1, 5)); // => [4, 3, 2, 1]
console.log(rangeRight2(0, 20, 5)); // => [15, 10, 5, 0]
console.log(rangeRight2(0, -4, -1)); // => [-3, -2, -1, 0]
console.log(rangeRight2(1, 4, 0)); // => [1, 1, 1]
// The function should return an empty array if start is equal to end.
console.log(rangeRight2(0)); // => []
console.log(rangeRight2(1, 8, 9)); // [1]
