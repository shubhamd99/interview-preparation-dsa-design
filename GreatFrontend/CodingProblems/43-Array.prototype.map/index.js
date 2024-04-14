// Array.prototype.map creates a new array populated with the results of calling a provided function on every element in the calling array.

// Implement Array.prototype.map. To avoid overwriting the actual Array.prototype.map which is being used by the autograder, we shall instead implement it as Array.prototype.myMap.

/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const result = [];
  const len = this.length;

  for (let idx = 0; idx < len; idx++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    // The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property.
    // If the property is inherited, or does not exist, the method returns false.
    result.push(
      Object.hasOwn(this, idx)
        ? callbackFn.call(thisArg, this[idx], idx, this)
        : undefined
    );
  }

  console.log("result: ", result);
  return result;
};

// Solution 2

/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap2 = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};

[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
