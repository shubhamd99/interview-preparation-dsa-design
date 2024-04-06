// The Function.prototype.apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

// Implement your own Function.prototype.apply without calling the native apply method.
// To avoid overwriting the actual Function.prototype.apply, implement the function as Function.prototype.myApply.

// Solution 1: Using bind
// bind, apply, and call can be viewed as sibling functions.
// They're highly similar in terms of function signature and usage.
// Within Function.prototype methods, this refers to the Function object itself.

Function.prototype.myApply = function (thisArg, argArray = []) {
  return this(...argArray);
};

// However, thisArg is still used widely in modern code, so we need another way to do this.
//  Function.prototype.bind creates a new function with a specified this value and initial arguments,
// without executing the original function immediately.
// It allows us to permanently bind a specific context (this value) to the function and partially apply arguments if needed.
// This is exactly what we need to bridge the gap in the solution above.

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.bind(thisArg)(...argArray);
};

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myApply(mary)); // 21
console.log(multiplyAge.myApply(john, [2])); // 84

// Solution 2: Using call
// Function.prototype.call and Function.prototype.apply are very similar. Here's an easy way to remember each function's signature:

// Function.prototype.call takes in a comma-separated list of arguments.
// Function.prototype.apply takes in an array of arguments.

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};

// Solution 3: Using Symbol
// Another approach is to create a Symbol and add it as a property to a newly-created Object with thisArg bound to it.
// This is very similar to one of the solutions to the Function.prototype.bind question.

/**
 * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
 * @param thisArg The object to be used as the this object.
 * @param argArray A set of arguments to be passed to the function.
 * @return {any}
 */
Function.prototype.myApply = function (thisArg, argArray = []) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
};
