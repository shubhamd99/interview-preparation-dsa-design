// https://leetcode.com/problems/single-number/description/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * Approach:
 * We need to find the only number in an array that does not appear twice,
 * using O(N) time and strictly O(1) space.
 *
 * Idea:
 * We use the Bitwise XOR operator (`^`). XOR has a mathematical property where
 * any number XOR'd against itself results in 0 (`a ^ a = 0`). It also has the
 * property that any number XOR'd against 0 remains itself (`a ^ 0 = a`).
 * Because XOR is commutative (order doesn't matter), if we XOR every single
 * number in the array together, all the matching pairs will annihilate each
 * other and become 0. The only value left remaining will be the single number
 * that didn't have a pair to destroy it.
 *
 * Steps:
 * 1. Initialize a `result` variable to `0`. (Because 0 ^ X = X, it acts as
 *    a clean slate).
 * 2. Loop through every `num` in the array.
 * 3. Perform the XOR operation: `result = result ^ num`.
 * 4. After the loop, return the `result`.
 *
 * Time Complexity: O(N)
 * - We iterate through the array of N elements exactly once.
 *
 * Space Complexity: O(1)
 * - We only use a single integer variable `result`. No Maps, Sets, or Arrays
 *   are created.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1. Clean slate! (0 ^ anything = anything)
  let result = 0;

  // 2. Loop through every number in the array
  for (let i = 0; i < nums.length; i++) {
    // 3. The Magic XOR Operation!
    // The twins will destroy each other as the loop progresses.
    result = result ^ nums[i];
  }

  // 4. The only survivor is our single number!
  return result;
};
