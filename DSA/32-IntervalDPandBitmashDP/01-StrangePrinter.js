// https://leetcode.com/problems/strange-printer/description/

// There is a strange printer with the following two special properties:

// The printer can only print a sequence of the same character each time.
// At each turn, the printer can print new characters starting from and ending at any place and will
// cover the original existing characters.
// Given a string s, return the minimum number of turns the printer needed to print it.

// Input: s = "aaabbb"
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".

// Input: s = "aba"
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string,
// which will cover the existing character 'a'.

/**
 * Approach:
 * We need to find the minimum number of turns to print a string, where a single
 * turn can print the same character across a large interval, overwriting previous
 * characters.
 *
 * Idea:
 * This is a classic Interval DP problem. We use Top-Down Recursion with Memoization.
 * For any interval `[i, j]`, the worst-case cost is printing `s[i]` separately
 * (1 turn) + the cost of the rest `dp(i+1, j)`. However, if we find a character
 * `s[k]` inside the interval that matches `s[i]`, we can print them both at the
 * exact same time! The cost then becomes the cost of the left chunk `dp(i, k-1)`
 * plus the cost of the right chunk `dp(k+1, j)`. We try all possible splits and
 * save the minimum cost in a 2D memoization table.
 *
 * Steps:
 * 1. Compress the string by removing consecutive duplicate characters (e.g.,
 *    "aaabb" -> "ab") to drastically reduce the number of DP states.
 * 2. Initialize a 2D `memo` table initialized with -1.
 * 3. Define the recursive `dfs(left, right)` function:
 *    - Base Case: if `left > right`, return 0.
 *    - Cache Check: if `memo[left][right]` is not -1, return it.
 *    - Default: Assume we print `s[left]` by itself: `res = 1 + dfs(left + 1, right)`.
 *    - Loop `k` from `left + 1` to `right`:
 *        - If `s[k] === s[left]`, we found a matching bookend!
 *        - Calculate the split: `dfs(left, k - 1) + dfs(k + 1, right)`.
 *        - Update `res = Math.min(res, split)`.
 *    - Save `res` to `memo[left][right]` and return it.
 * 4. Call `dfs(0, compressedString.length - 1)`.
 *
 * Time Complexity: O(N^3)
 * - N is the length of the compressed string. There are N^2 possible intervals
 *   (left, right pairs), and for each interval, we run a loop of size up to N.
 *
 * Space Complexity: O(N^2)
 * - For the 2D Memoization table and the recursion call stack.
 */

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  if (!s) return 0;

  // 1. Compress the string to remove consecutive duplicates
  // Example: "aaabbbaac" -> "abac"
  let compressed = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      compressed += s[i];
    }
  }

  const n = compressed.length;

  // 2. Initialize the 2D Memoization Table
  // memo[left][right] stores the minimum turns to print compressed[left...right]
  const memo = new Array(n).fill(0).map(() => new Array(n).fill(-1));

  // 3. Define the Interval DP Recursion
  const dfs = (left, right) => {
    // Base case: empty interval takes 0 turns
    if (left > right) return 0;

    // Return cached answer if we already solved this exact interval
    if (memo[left][right] !== -1) return memo[left][right];

    // WORST CASE: Print the first character completely by itself
    let minTurns = 1 + dfs(left + 1, right);

    // INTERVAL MAGIC: Look for a matching character further down the line!
    for (let k = left + 1; k <= right; k++) {
      // If we find a match, we can print from 'left' all the way to 'k' in 1 turn!
      if (compressed[k] === compressed[left]) {
        // The left chunk: dfs(left, k - 1)
        // The right chunk: dfs(k + 1, right)
        // (Notice we don't add 1 here, because the cost of printing the match
        // is completely absorbed into the left chunk!)
        const splitCost = dfs(left, k - 1) + dfs(k + 1, right);

        minTurns = Math.min(minTurns, splitCost);
      }
    }

    // Cache the result and return
    memo[left][right] = minTurns;
    return minTurns;
  };

  // 4. Start the recursion on the entire compressed string
  return dfs(0, n - 1);
};
