// Array.prototype.at takes an integer value and returns the item at that index,
// allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Implement Array.prototype.at. To avoid overwriting the actual Array.prototype.at, we shall instead implement it as Array.prototype.myAt.

// Solution 1
/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
  const relativeIndex = index >= 0 ? index : Math.max(this.length + index, -1);
  return this[relativeIndex];
};

// Solution 2
/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt2 = function (index) {
  const len = this.length;
  const relativeIndex = Number(index);
  const k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

  if (k < 0 || k >= len) {
    return undefined;
  }

  return this[k];
};

// Solution 3
/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt3 = function (index) {
  const len = this.length;
  if (index < -len || index >= len) {
    return;
  }

  return this[(index + len) % len];
};

const arr = [42, 79];
arr.myAt(0); // 42
arr.myAt(1); // 79
arr.myAt(2); // undefined

arr.myAt(-1); // 79
arr.myAt(-2); // 42
arr.myAt(-3); // undefined
