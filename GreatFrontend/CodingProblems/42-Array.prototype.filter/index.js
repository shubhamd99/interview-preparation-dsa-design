// Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

// For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

// Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const result = [];
  const len = this.length;

  for (let idx = 0; idx < len; idx++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    // The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property.
    // If the property is inherited, or does not exist, the method returns false.
    if (
      Object.hasOwn(this, idx) &&
      callbackFn.call(thisArg, this[idx], idx, this)
    ) {
      result.push(this[idx]);
    }
  }

  console.log("result: ", result);
  return result;
};

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

const object1 = {
  prop: "exists",
};
console.log(Object.hasOwn(object1, "prop"));
// Expected output: true
console.log(Object.hasOwn(object1, "toString"));
// Expected output: false
console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// Expected output: false

const fruits = ["Apple", "Banana", "Watermelon", "Orange", ,];
console.log(Object.hasOwn(fruits, 3)); // true ('Orange')
console.log(Object.hasOwn(fruits, 4)); // false
console.log(Object.hasOwn(fruits, 5)); // false - not defined
