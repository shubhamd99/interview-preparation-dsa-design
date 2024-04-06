// Implement a custom Array function, Array.prototype.square() which creates a new array with the
// results of squaring every element within the array the .square() method is called on.

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  return this.map((el) => el * el);
};

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  const length = this.length;
  const results = new Array(length);

  for (let i = 0; i < length; i++) {
    results[i] = this[i] * this[i];
  }

  return results;
};
