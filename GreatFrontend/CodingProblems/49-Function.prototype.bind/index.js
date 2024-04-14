// The Function.prototype.bind() method creates a new function that, when called,
// has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Implement your own Function.prototype.bind without calling the native bind method.
// To avoid overwriting the actual Function.prototype.bind, implement the function as Function.prototype.myBind.

// Solution 1: Using call/apply

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  const originalMethod = this;
  return function (...args) {
    return originalMethod.apply(thisArg, [...argArray, ...args]);
  };
};

// Solution 2: Using Reflect

// JavaScript Reflect is an ES6 global object that provides a powerful set of methods for manipulating properties, variables, and object behavior at runtime.
// The Reflect namespace object contains static methods for invoking interceptable JavaScript object internal methods.
// The major use case of Reflect is to provide default forwarding behavior in Proxy handler traps

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {Function}
 */
Function.prototype.myBind2 = function (thisArg, ...argArray) {
  const originalFunc = this;
  if (typeof originalFunc !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  return function (...args) {
    // The Reflect.apply() static method calls a target function with arguments as specified.
    return Reflect.apply(originalFunc, thisArg, [...argArray, ...args]);
    // This also works 👇
    // return Function.prototype.apply.call(originalFunc, thisArg, [
    //   ...argArray,
    //   ...args,
    // ]);
  };
};

const john = {
  age: 42,
  getAge: function () {
    // When you define a method within an object (like getAge in the john object), the value of this inside that method refers to the object itself. In this case, this points to the john object.
    return this.age;
  },
};

console.log(john.getAge()); // 42
const unboundGetAge = john.getAge;
// When you call unboundGetAge(), it’s no longer associated with the john object. Instead, it’s executed in the global context (i.e., not within any specific object).
// In the global context, this refers to the global object (usually window in browsers or global in Node.js).
console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42

const boundGetAge2 = john.getAge.myBind2(john);
console.log(boundGetAge2()); // 42
