// https://leetcode.com/problems/range-sum-query-immutable/description/

// Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:
// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left
// and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Segment Tree - A tree data structure used for storing information about intervals (segments) of an array.
// It is primarily used to perform efficient range queries (such as calculating the sum, minimum, or maximum of
// a subset of elements) and range updates, executing both operations in logarithmic time O(log N).

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

/**
 * Approach:
 * We need to create a class that can quickly calculate the sum of elements
 * between two indices `left` and `right`.
 *
 * Idea:
 * Because the `sumRange` function will be called many times, a standard `for`
 * loop (O(N) time) is too slow. Instead, we compute a "Prefix Sum" array once
 * during initialization (O(N) time). The prefix array stores the cumulative
 * sum of the elements up to that point. To answer a range query `[left, right]`,
 * we simply take the cumulative sum up to `right` and subtract the cumulative
 * sum of the elements immediately preceding `left`. We pad the prefix array with
 * a `0` at the 0th index to gracefully handle queries where `left` is 0 without
 * going out of bounds. With this, `sumRange` executes in instant O(1) time!
 *
 * Steps:
 * 1. Constructor: Initialize `this.prefix` as an array of length `nums.length + 1`.
 * 2. Set the 0th index of `this.prefix` to `0` (The padding).
 * 3. Loop through `nums`. Calculate the running total and save it into the
 *    `this.prefix` array (shifted by +1 because of our padding).
 * 4. sumRange: Return `this.prefix[right + 1] - this.prefix[left]`.
 *
 * Time Complexity:
 * - Constructor: O(N) to build the prefix array once.
 * - sumRange: O(1) instant mathematical lookup.
 *
 * Space Complexity: O(N)
 * - We store an additional `prefix` array of size N + 1.
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // 1. Create the padded Prefix Sum array
  this.prefix = new Array(nums.length + 1).fill(0);

  let runningTotal = 0;

  // 2. Build the running totals!
  for (let i = 0; i < nums.length; i++) {
    runningTotal += nums[i];

    // Save it into the prefix array.
    // We use i + 1 because the 0th slot is filled with our padding 0!
    this.prefix[i + 1] = runningTotal;
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // 3. The Magic Math:
  // Total sum up to 'right' MINUS the total sum of the garbage BEFORE 'left'
  // (We add +1 to right because our prefix array has that 0 padding at the front)
  const rightTotal = this.prefix[right + 1];

  // (We don't need to add or subtract from left, because the padding perfectly
  // aligns the index to point at the garbage directly *before* the left bound!)
  const leftGarbage = this.prefix[left];

  return rightTotal - leftGarbage;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// --- EXAMPLE TRACE: Range Sum Query ---

// Input Array: [-2, 0, 3, -5, 2, -1]
// Array Length: 6

// =========================================================
// INITIALIZATION (Constructor)
// =========================================================
// Create Prefix Array of size (6 + 1 = 7).
// Pad the 0th index with '0'.

// i = 0 (-2) -> Total: -2 -> prefix[1] = -2
// i = 1 ( 0) -> Total: -2 -> prefix[2] = -2
// i = 2 ( 3) -> Total:  1 -> prefix[3] = 1
// i = 3 (-5) -> Total: -4 -> prefix[4] = -4
// i = 4 ( 2) -> Total: -2 -> prefix[5] = -2
// i = 5 (-1) -> Total: -3 -> prefix[6] = -3

// FINAL PREFIX ARRAY:
// [  0,  -2,  -2,   1,  -4,  -2,  -3 ]
//  (pad) [0]  [1]  [2]  [3]  [4]  [5]  <-- Original indices they represent

// =========================================================
// QUERY 1: sumRange(0, 2)
// =========================================================
// Looking for sum of: [-2, 0, 3]

// - rightTotal  = prefix[right + 1] = prefix[3] = 1
// - leftGarbage = prefix[left] = prefix[0] = 0  (The Padding!)

// Math: 1 - 0 = 1
// Output: 1

// =========================================================
// QUERY 2: sumRange(2, 5)
// =========================================================
// Looking for sum of: [3, -5, 2, -1]

// - rightTotal  = prefix[right + 1] = prefix[6] = -3
// - leftGarbage = prefix[left] = prefix[2] = -2
// (Notice how prefix[2] perfectly holds the sum of [-2, 0], which is exactly
//  the "garbage" we want to subtract from the total!)

// Math: -3 - (-2) -> -3 + 2 = -1
// Output: -1

// =========================================================
// QUERY 3: sumRange(0, 5)
// =========================================================
// Looking for sum of: [-2, 0, 3, -5, 2, -1] (The whole array)

// - rightTotal  = prefix[right + 1] = prefix[6] = -3
// - leftGarbage = prefix[left] = prefix[0] = 0

// Math: -3 - 0 = -3
// Output: -3
