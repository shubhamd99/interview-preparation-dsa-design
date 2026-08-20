// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/ - HARD

// Given an integer array nums and an integer k, return true if it is possible to divide this array into
// k non-empty subsets whose sums are all equal.

// Input: nums = [4,3,2,3,5,2,1], k = 4
// Output: true
// Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

/**
 * Approach:
 * We need to determine if an array can be partitioned into `k` subsets of equal sum.
 *
 * Idea:
 * This is a classic Bitmask DP problem. Because N <= 16, we can represent the
 * state of used/unused numbers as a 16-bit integer (`mask`). We use Top-Down
 * Recursion. At each step, we try to add an unused number to our current bucket.
 * If the bucket hits the `target` sum, we "close" it and start a new bucket (by
 * wrapping the sum back to 0). By memoizing the `mask`, we prevent exploring
 * the exact same combination of used numbers multiple times, drastically reducing
 * the time complexity.
 *
 * Steps:
 * 1. Calculate the total sum. If `total % k !== 0`, return false.
 * 2. Calculate the `target` sum for each bucket (`total / k`).
 * 3. Initialize a 1D `memo` array of size `1 << N` (which is 2^N).
 * 4. Define `dfs(mask, currentSum)`:
 *    - Base Case: If `mask === (1 << N) - 1`, all items are used! Return true.
 *    - Cache Check: If `memo[mask]` is already calculated, return it.
 *    - Loop `i` through all `N` items:
 *        - If the i-th bit is OFF `(mask & (1 << i)) === 0`:
 *            - If `currentSum + nums[i] <= target`:
 *                - Calculate the new sum. If it hits target, wrap it to 0!
 *                  `newSum = (currentSum + nums[i]) % target`.
 *                - Flip the i-th bit ON! `newMask = mask | (1 << i)`.
 *                - If `dfs(newMask, newSum)` returns true, cache and return true!
 *    - If no combination worked, cache and return false.
 * 5. Call `dfs(0, 0)` (All switches OFF, bucket sum is 0).
 *
 * Time Complexity: O(N * 2^N)
 * - There are 2^N possible masks (combinations of used items). For each mask,
 *   we run a loop of size N.
 *
 * Space Complexity: O(2^N)
 * - For the 1D Memoization array and the recursion call stack.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  const totalSum = nums.reduce((sum, num) => sum + num, 0);

  // 1. If it doesn't divide evenly, it's mathematically impossible
  if (totalSum % k !== 0) return false;

  const target = totalSum / k;
  const N = nums.length;

  // 2. Initialize the Memoization Table
  // The maximum state is (1 << N) which is exactly 2^N.
  // We use undefined to indicate an uncalculated state.
  const memo = new Array(1 << N).fill(undefined);

  // 3. Define the Bitmask DP Recursion
  const dfs = (mask, currentSum) => {
    // Base Case: `(1 << N) - 1` is a binary number with exactly N ones (e.g. 1111)
    // If our mask matches this, every single item was successfully used!
    if (mask === (1 << N) - 1) {
      return true;
    }

    // Return cached answer if we already explored this exact combination
    if (memo[mask] !== undefined) {
      return memo[mask];
    }

    // Try adding every possible number to the current bucket
    for (let i = 0; i < N; i++) {
      // --- BITMASK MAGIC: Check if the light switch is OFF ---
      // If the i-th bit is 0, we haven't used this number yet!
      if ((mask & (1 << i)) === 0) {
        // Only use it if it physically fits inside the bucket!
        if (currentSum + nums[i] <= target) {
          // If it fills the bucket perfectly, the bucket resets to 0 for the next one!
          const newSum = (currentSum + nums[i]) % target;

          // --- BITMASK MAGIC: Turn the light switch ON! ---
          const newMask = mask | (1 << i);

          // Recursively explore. If this branch succeeds, we are done!
          if (dfs(newMask, newSum)) {
            memo[mask] = true;
            return true;
          }
        }
      }
    }

    // If we tried everything and nothing worked, this combination is a dead end
    memo[mask] = false;
    return false;
  };

  // 4. Start with mask 0 (all items unused) and current sum 0
  return dfs(0, 0);
};
