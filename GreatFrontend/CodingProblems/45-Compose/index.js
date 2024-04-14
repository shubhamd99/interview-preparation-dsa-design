// Implement a function compose that takes multiple functions as arguments and,
// returns a new function that applies those functions in reverse order.
// The output of one function becomes the input of the next function, creating a chain of function compositions.

// If there are no functions passed to the compose function,
// the default behavior is to return a new function that simply returns the input it receives.
// In other words, the default behavior of compose without any functions results in a simple identity function.

// You may assume that all the functions accept a single parameter.

// Solution 1: Using reduceRight

/**
 * @param {...Function} args
 * @returns Function
 */
function compose(...fns) {
  // Closure
  return function (x) {
    // Array.prototype.reduceRight()
    // The reduceRight() method of Array instances applies a function against an accumulator
    // and each value of the array (from right-to-left) to reduce it to a single value.
    return fns.reduceRight((result, func) => func(result), x);
  };
}

// Solution 2: Using for loops
/**
 * @param {...Function} args
 * @returns Function
 */
function compose2(...fns) {
  return function (x) {
    let result = x;

    for (let i = fns.length - 1; i >= 0; i--) {
      result = fns[i](result);
    }

    return result;
  };
}

// Solution 3: Recursion
function compose3(...fns) {
  return function (x) {
    function apply(fn, ...rest) {
      if (rest.length === 0) {
        return fn(x);
      }

      return fn(apply(...rest));
    }

    return apply(...fns);
  };
}

const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;

const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3)); // (3 + 1) * 2 - 10 => -2

const composedFn2 = compose2(subtract10, double, add1);
console.log(composedFn2(3)); // (3 + 1) * 2 - 10 => -2

const composedFn3 = compose3(subtract10, double, add1);
console.log(composedFn3(3)); // (3 + 1) * 2 - 10 => -2
