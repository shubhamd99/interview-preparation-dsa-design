// https://leetcode.com/problems/random-pick-index/description/

// Given an integer array nums with possible duplicates, randomly output the index of a given target number.
// You can assume that the given target number must exist in the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the array nums.
// int pick(int target) Picks a random index i from nums where nums[i] == target.
// If there are multiple valid i's, then each index should have an equal probability of returning.

// Input
// ["Solution", "pick", "pick", "pick"]
// [[[1, 2, 3, 3, 3]], [3], [1], [3]]
// Output
// [null, 4, 0, 2]

// Solution solution = new Solution([1, 2, 3, 3, 3]);
// solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
// solution.pick(1); // It should return 0. Since in the array only nums[0] is equal to 1.
// solution.pick(3); // It should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.

/**
 * Approach:
 * We need to randomly pick an index of a given target number, ensuring equal
 * probability, while optimizing for memory (O(1) extra space).
 *
 * Idea:
 * We use Reservoir Sampling! Instead of pre-building an expensive O(N) Hash Map
 * to store all indices, we iterate through the array on every `pick` call.
 * We keep a running tally (`count`) of how many times we have seen the target.
 * Whenever we encounter the target, we generate a random number between `0` and
 * `count - 1`. If the random number hits `0`, we update our `result` with the
 * current index. Mathematically, this guarantees that the i-th occurrence of the
 * target has exactly a `1/i` chance of replacing the current result, ensuring a
 * perfectly uniform distribution by the end of the loop!
 *
 * Steps:
 * 1. Constructor: Just save a reference to the `nums` array. O(1) time and space.
 * 2. Pick:
 *    - Initialize `count = 0` and `result = -1`.
 *    - Loop `i` through every element in the array:
 *        - If `nums[i] === target`:
 *            - Increment `count` by 1.
 *            - Roll a dice! `Math.floor(Math.random() * count)`.
 *            - If the dice lands on `0`, update `result = i`.
 *    - Return `result`.
 *
 * Time Complexity:
 * - Constructor: O(1)
 * - Pick: O(N) because we have to scan the array to find the targets.
 *
 * Space Complexity: O(1)
 * - We only use a `count` and `result` variable. Zero extra memory!
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  // We don't even make a copy. We just point to the original array!
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let count = 0;
  let result = -1;

  // Scan the array like a stream of data
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      count++;

      // --- RESERVOIR SAMPLING MAGIC ---
      // Generate a random number between 0 and (count - 1)
      // Example: If count is 3, Math.random() * 3 generates 0, 1, or 2.

      // The - 1 is not actually written in the code because it is mathematically hidden
      // inside how JavaScript's Math.random() and Math.floor() functions work!
      const randomChance = Math.floor(Math.random() * count);

      // If it lands on 0 (which has exactly a 1/count chance of happening),
      // this new index wins the right to overwrite our current result!
      if (randomChance === 0) {
        result = i;
      }
    }
  }

  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
