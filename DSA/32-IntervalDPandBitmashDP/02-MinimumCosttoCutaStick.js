// https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/ - HARD

// Given a wooden stick of length n units. The stick is labelled from 0 to n. For example,
// a stick of length 6 is labelled as follows:
// Given an integer array cuts where cuts[i] denotes a position you should perform a cut at.
// You should perform the cuts in order, you can change the order of the cuts as you wish.

// The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts.
// When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length
// of the stick before the cut). Please refer to the first example for a better explanation.
// Return the minimum total cost of the cuts.

// Input: n = 7, cuts = [1,3,4,5]
// Output: 16
// Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:
// The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6
// (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a
// rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
// Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16
// (as shown in the example photo 7 + 4 + 3 + 2 = 16).

/**
 * Approach:
 * We need to find the minimum cost to make a series of cuts on a stick, where
 * the cost of a cut is the length of the current stick being cut.
 *
 * Idea:
 * This is a pure Interval DP problem. Making a cut splits the stick into two
 * independent subproblems. To easily calculate the length of the sticks, we
 * push `0` and `n` into the `cuts` array and sort it.
 * We use a recursive function `dfs(left, right)` where `left` and `right` are
 * indices in the sorted array. For any interval, we try making every possible
 * cut `k` strictly between `left` and `right`. The cost of choosing `k` is the
 * length of the current stick (`cuts[right] - cuts[left]`) plus the recursive
 * cost of solving the two new halves (`dfs(left, k) + dfs(k, right)`). We
 * memoize the results to avoid recalculating the same intervals.
 *
 * Steps:
 * 1. Push `0` and `n` to the `cuts` array.
 * 2. Sort the `cuts` array in ascending order.
 * 3. Initialize a 2D `memo` table of size M x M (where M is cuts.length) with -1.
 * 4. Define `dfs(left, right)`:
 *    - Base Case: If `right - left === 1`, there are no cuts between them. Return 0.
 *    - Cache: If `memo[left][right] !== -1`, return it.
 *    - Initialize `minCost = Infinity`.
 *    - Loop `k` from `left + 1` to `right - 1`:
 *        - `currentLength = cuts[right] - cuts[left]`.
 *        - `cost = currentLength + dfs(left, k) + dfs(k, right)`.
 *        - `minCost = Math.min(minCost, cost)`.
 *    - Save to `memo[left][right]` and return `minCost`.
 * 5. Call `dfs(0, cuts.length - 1)`.
 *
 * Time Complexity: O(M^3)
 * - M is the total number of cuts (including 0 and n). There are M^2 possible
 *   intervals `[left, right]`, and for each interval, we run a loop of size up to M.
 *
 * Space Complexity: O(M^2)
 * - For the 2D Memoization table and the recursion call stack.
 */

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  // 1. Add the stick boundaries to the array
  cuts.push(0);
  cuts.push(n);

  // 2. Sort the array so the cuts are in physical order from left to right
  cuts.sort((a, b) => a - b);

  const m = cuts.length;

  // 3. Initialize the 2D Memoization Table
  const memo = new Array(m).fill(0).map(() => new Array(m).fill(-1));

  // 4. Define the Interval DP Recursion
  // 'left' and 'right' are INDICES in the cuts array, not physical positions!
  const dfs = (left, right) => {
    // Base Case: If the indices are right next to each other (e.g. 0 and 1),
    // there are no cuts left to make between them. The cost is 0.
    if (right - left === 1) {
      return 0;
    }

    // Return cached answer if we already solved this exact piece of wood
    if (memo[left][right] !== -1) {
      return memo[left][right];
    }

    let minCost = Infinity;

    // Try every single possible cut strictly between 'left' and 'right'
    for (let k = left + 1; k < right; k++) {
      // The cost of making this cut is the physical length of the current wood
      const currentLength = cuts[right] - cuts[left];

      // Plus the cost to recursively chop up the new left and right pieces
      const cost = currentLength + dfs(left, k) + dfs(k, right);

      minCost = Math.min(minCost, cost);
    }

    // Cache the best possible cost and return it
    memo[left][right] = minCost;
    return minCost;
  };

  // 5. Start the recursion spanning the entire array of cuts
  return dfs(0, m - 1);
};
