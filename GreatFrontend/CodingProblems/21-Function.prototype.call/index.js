// The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

// Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

// Solution 1: Using bind

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.bind(thisArg)(...argArray);
};

// Or you can also pass the argArray into bind() before executing it.
Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.bind(thisArg, ...argArray)();
};

// Solution 2: Using apply
/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  return this.apply(thisArg, [...argArray]);
};

// Solution 3: Using Symbol

/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return wrapperObj[sym](...argArray);
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

multiplyAge.myCall(mary); // 21
multiplyAge.myCall(john, 2); // 84
