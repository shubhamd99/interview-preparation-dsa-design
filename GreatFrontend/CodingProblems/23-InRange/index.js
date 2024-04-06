// Implement a function inRange(value, [start=0], end) to check if a number value is between start and up to,
// but not including, end. If only 2 arguments are specified, the second argument becomes end and start is set to 0.
// If start is greater than end, the parameters are swapped to support negative ranges.

/**
 * @param {number} value The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function inRange(value, start = 0, end) {
  if (end === undefined) {
    if (value < start) {
      return true;
    }
  }
  if (end < start) {
    let temp = start;
    start = end;
    end = temp;
  }
  if (value >= start && value < end) {
    return true;
  }
  return false;
}

console.log(inRange(3, 2, 4)); // => true
console.log(inRange(4, 8)); // => true
console.log(inRange(4, 2)); // => false
console.log(inRange(2, 2)); // => false
console.log(inRange(1.2, 2)); // => true
console.log(inRange(5.2, 4)); // => false
console.log(inRange(-3, -2, -6)); // => true

// Solution 2: Verbose
function inRange2(value, startParam, endParam) {
  let start = startParam;
  let end = endParam;
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (start < end) {
    return value >= start && value < end;
  }

  // Negative case
  return value >= end && value < start;
}

// Solution 3: One-liner
// This even shorter solution relies on setting a default value for end to be 0.
// This works because if the user omits the end parameter, the range becomes [start, 0] but will be flipped around by the Math.min() and Math.max().
function inRange3(value, start, end = 0) {
  return Math.min(start, end) <= value && value < Math.max(start, end);
}
