// https://leetcode.com/problems/missing-number/description/

// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

/**
 * Approach:
 * We need to find the missing number in an array containing n distinct numbers
 * in the range [0, n], using O(N) time and strictly O(1) space.
 *
 * Idea:
 * We use the Bitwise XOR operator (`^`). We know that `a ^ a = 0`.
 * We know the array is supposed to contain all indices from `0` to `n`.
 * If we XOR all the expected indices `[0...n]`, and also XOR all the actual values
 * found in the array, every number that is present will have a twin (one from
 * the index, one from the array value). Those twins will annihilate each other
 * to 0. The missing number will only appear once (from the index), meaning it
 * will be the only value remaining at the end!
 *
 * Steps:
 * 1. Initialize `result = nums.length`. (We do this because our `for` loop
 *    will only go up to `nums.length - 1`. We need to manually include the `n`
 *    index in our XOR calculation).
 * 2. Loop `i` through every number in the array:
 *    - XOR the `result` against the current index `i`.
 *    - XOR the `result` against the actual value `nums[i]`.
 * 3. After the loop, return the `result`.
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
var missingNumber = function (nums) {
  // Initialize result to 'n' (the length of the array)
  // We do this because the loop below only checks indices 0 through (n-1).
  // We have to inject the final index 'n' into the XOR equation manually!
  let result = nums.length;

  for (let i = 0; i < nums.length; i++) {
    // The Magic XOR Operation!
    // We XOR against the Expected Index (0, 1, 2...)
    result = result ^ i;

    // We XOR against the Actual Value (3, 0, 1...)
    result = result ^ nums[i];
  }

  // The twins destroyed each other. The survivor is the missing number!
  return result;
};
