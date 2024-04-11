// Implement a function range([start=0], end, [step=1]) that creates an array of numbers (positive and/or negative)
// progressing from start up to, but not including, end.
// A step of -1 is used if a negative start is specified without an end or step.
// If end is not specified, it's set to start with start then set to 0.

// Lodash _.range

// Edge Case: To handle cases where start and step are not specified but end is negative, we can add an if statement to change the value of step to -1.

/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
function range(start = 0, end, step = 1) {
  const result = [];

  // Adjust parameters if only `end` is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // If end is less than start and step is 1, change step to -1 (for descending order).
  // Adjust `step` for descending sequences
  // end < start means its negative
  if (end < start && step === 1) {
    step = -1;
  }

  // Subtract start from end to find the total range.
  // Divide the result by step.
  // Let’s say we have a range from 10 to 20 with a step size of 2:
  // start = 10
  // end = 20
  // step = 2
  // The length would be: (20 - 10) / 2 = 5
  const length = (end - start) / (step || 1);

  // Generate the range
  for (let i = 0; i < length; i++) {
    // i = current step count
    // Let’s assume start = 3 and step = 2:
    // When i = 0, the value is 3 + 0 * 2 = 3
    // When i = 1, the value is 3 + 1 * 2 = 5
    // When i = 2, the value is 3 + 2 * 2 = 7
    result.push(start + i * step);
  }

  return result;
}

range(4); // => [0, 1, 2, 3]
range(-4); // => [0, -1, -2, -3]
range(1, 5); // => [1, 2, 3, 4]
range(0, 20, 5); // => [0, 5, 10, 15]
range(0, -4, -1); // => [0, -1, -2, -3]
range(1, 4, 0); // => [1, 1, 1]
// The function should return an empty array if start is equal to end.
range(0); // => []
