// Currying
// Implement a sum function that accepts a number and allows for repeated calling with more numbers.
// Calling the function without an argument will sum up all the arguments thus far and return the total.

// First Class Function:
// A programming language is said to have First-class functions when functions in that language are treated like any other variable.
// For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

/**
 * @param {number} value
 * @return {Function}
 */
function sum(value) {
  return function (b) {
    return b === undefined ? value : sum(value + b);
  };
}

// One-liner using Arrow Functions
const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;
export default sum;

sum(1)(); // 1
sum(1)(2)(); // 3
sum(1)(2)(-3)(); // 0
