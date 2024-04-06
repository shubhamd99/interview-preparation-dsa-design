// Implement a function numberOfArguments, to return the number of arguments it was called with.
// Note that this value is the actual number of arguments, which can be more or less than the defined parameter count (which is determined by Function.prototype.length).

// EdgeCase: Calling a function with undefined. undefined is still counted as a parameter. Default function parameters will be initialized with default values if no value or undefined is passed.

// Solution 1: Using arguments object

/**
 * @param {...any} args
 * @return {number}
 */
function numberOfArguments() {
  return arguments.length;
}

// Solution 2: Using rest parameters

/**
 * @param {...any} args
 * @return {number}
 */
function numberOfArguments2(...args) {
  return args.length;
}

numberOfArguments(); // 0
numberOfArguments(1); // 1
numberOfArguments(2, 3); // 2
numberOfArguments("a", "b", "c"); // 3
numberOfArguments(undefined); // 1
