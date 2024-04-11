// Implement a function objectMap(obj, fn) to return a new object containing the results of calling a provided function on every value in the object.
// The function fn is called with a single argument, the value that is being mapped/transformed.

// Solution 1: The only tricky part of the question is to provide the value of this for the fn via Function.prototype.call()/Function.prototype.apply().
//  In Array.prototype.map(), the thisArg value can be provided as a second argument to the .map() function,
//  and the callback function will the invoked with thisArg as the this value.
// In our case, the this value within callbacks is not explicitly specified but a reasonable assumption is to use the obj input as this.

/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
function objectMap(obj, fn) {
  const result = {};

  // const obj = { name: 'Shubham' }
  // Object.prototype.hasOwnProperty.call(obj, 'name') -> true
  // Object.prototype.hasOwnProperty.call(obj, 'index') -> false

  for (const key in obj) {
    // Determines whether an object has a property with the specified name.
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = fn.call(obj, obj[key]); // The Function.prototype.call() method allows you to invoke a function with a specific this value and individual arguments provided.
    }
  }

  return result;
}

// Without hasOwnProperty still works
function objectMap2(obj, fn) {
  const result = {};

  for (const key in obj) {
    result[key] = fn.call(obj, obj[key]); // The Function.prototype.call() method allows you to invoke a function with a specific this value and individual arguments provided.
  }

  return result;
}

// Solution 2:
/**
 * @param {Object} obj
 * @param {Function} fn
 * @returns Object
 */
function objectMap3(obj, fn) {
  // Returns an object created by key-value entries for properties and methods
  return Object.fromEntries(
    // Returns an array of key/values of the enumerable properties of an object
    Object.entries(obj).map(([key, value]) => [key, fn.call(obj, value)])
  );
}

const double = (x) => x * 2;
objectMap({ foo: 1, bar: 2 }, double); // => { foo: 2, bar: 4}
