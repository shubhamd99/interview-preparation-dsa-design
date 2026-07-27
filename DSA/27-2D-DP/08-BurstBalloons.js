// https://leetcode.com/problems/burst-balloons/description/ - HARD

// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented
// by an array nums. You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins.
// If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

// Return the maximum coins you can collect by bursting the balloons wisely.

// Input: nums = [3,1,5,8]
// Output: 167
// Explanation:
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

// Input: nums = [1,5]
// Output: 10

/**
 * Approach:
 * We need to find the maximum coins we can collect by bursting balloons, where
 * bursting a balloon gives coins based on its adjacent neighbors.
 *
 * Idea:
 * Because bursting a balloon changes the adjacent neighbors for future pops,
 * standard forward-thinking DP fails. We must use Interval DP with the "Reverse
 * Trick". We think about which balloon to burst LAST in an interval `[left, right]`.
 * If balloon `i` bursts last, its neighbors are guaranteed to be `left - 1` and
 * `right + 1` (the boundaries outside our interval). This perfectly isolates the
 * subproblems `[left, i - 1]` and `[i + 1, right]`. We use Top-Down Memoization
 * to cache the results of these intervals.
 *
 * Steps:
 * 1. Pad the `nums` array with a `1` at the start and end to handle out-of-bounds math.
 * 2. Create a 2D `cache` matrix filled with 0s to store answers for `[left][right]`.
 * 3. Create a recursive `dfs(left, right)` function:
 *    - Base Case: If `left > right`, there are no balloons to burst! Return 0.
 *    - Cache Check: If `cache[left][right] !== 0`, return the saved answer.
 *    - Loop `i` from `left` up to `right` (Try making every balloon the LAST one to pop):
 *        - `coins = nums[left - 1] * nums[i] * nums[right + 1]`
 *        - `total = coins + dfs(left, i - 1) + dfs(i + 1, right)`
 *        - Track the absolute maximum `total`.
 *    - Save the max total in `cache[left][right]` and return it.
 * 4. Call `dfs(1, nums.length - 2)` (We start at 1 and end at length-2 because
 *    the first and last elements are our fake padding balloons!).
 *
 * Time Complexity: O(N^3)
 * - There are O(N^2) possible intervals `[left, right]`. For each interval,
 *   we run a loop of size O(N) to pick the last balloon.
 *
 * Space Complexity: O(N^2)
 * - We create a 2D Cache matrix of size N x N. The recursion stack also goes
 *   O(N) deep.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  // 1. Pad the array with 1s on both sides
  const paddedNums = [1, ...nums, 1];
  const n = paddedNums.length;

  // 2. Create a Cache (2D array filled with 0s)
  const cache = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // 3. Our Recursive Memoization Function
  // It calculates the max coins we can get strictly between the 'left' and 'right' indices
  function dfs(left, right) {
    // Base Case: Our chunk has shrunk to nothing!
    if (left > right) {
      return 0;
    }

    // Have we solved this exact chunk before? Return the sticky note!
    if (cache[left][right] !== 0) {
      return cache[left][right];
    }

    let maxCoinsForChunk = 0;

    // Try making every single balloon in this chunk the LAST one to pop!
    for (let i = left; i <= right; i++) {
      // Because 'i' is the last to pop, everything else inside the chunk is gone.
      // Its neighbors MUST be the balloons directly outside the chunk!
      const coinsForI =
        paddedNums[left - 1] * paddedNums[i] * paddedNums[right + 1];

      // The total is the coins for 'i' + the max coins from the left side + the right side
      const total = coinsForI + dfs(left, i - 1) + dfs(i + 1, right);

      // Keep track of whichever balloon gave us the best result for this chunk
      maxCoinsForChunk = Math.max(maxCoinsForChunk, total);
    }

    // Save the best answer to the Cache and return it
    cache[left][right] = maxCoinsForChunk;
    return maxCoinsForChunk;
  }

  // 4. Launch the DFS!
  // We only care about the real balloons, which are strictly between the padded 1s.
  return dfs(1, n - 2);
};
