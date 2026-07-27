// https://leetcode.com/problems/interleaving-string/description/

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.

/**
 * Approach:
 * We need to determine if string `s3` can be formed by interleaving strings
 * `s1` and `s2`.
 *
 * Idea:
 * We use 2D Dynamic Programming (Tabulation) with the Empty String Buffer trick.
 * Our boolean matrix `dp` of size `(s1.length + 1) x (s2.length + 1)` stores
 * whether the first `r` characters of `s1` and the first `c` characters of `s2`
 * can successfully form the first `r + c` characters of `s3`.
 * We first handle the edges (Row 0 and Col 0). Then, for every cell, we check
 * if we can take a character from `s1` (by checking if the character matches `s3`
 * and looking Above) OR if we can take a character from `s2` (by checking if
 * the character matches `s3` and looking Left). If either path is valid, the
 * cell is marked True.
 *
 * Steps:
 * 1. Hard constraint: If `s1.length + s2.length !== s3.length`, return `false`.
 * 2. Initialize a 2D `dp` array of size `[s1.length + 1][s2.length + 1]` with `false`.
 * 3. Base Case [0][0]: `dp[0][0] = true`.
 * 4. Base Case Col 0 (s2 is empty): Loop `r` and check if `s1` matches `s3` AND
 *    the cell Above is true.
 * 5. Base Case Row 0 (s1 is empty): Loop `c` and check if `s2` matches `s3` AND
 *    the cell Left is true.
 * 6. Loop `r` from 1 to `s1.length`:
 *    - Loop `c` from 1 to `s2.length`:
 *        - The index we are targeting in `s3` is `r + c - 1`.
 *        - Try taking from `s1`: `takeS1 = (s1[r-1] === s3[r+c-1]) && dp[r-1][c]`
 *        - Try taking from `s2`: `takeS2 = (s2[c-1] === s3[r+c-1]) && dp[r][c-1]`
 *        - DP Formula: `dp[r][c] = takeS1 || takeS2`
 * 7. Return the bottom-right cell: `dp[s1.length][s2.length]`.
 *
 * Time Complexity: O(S1 * S2)
 * - We iterate through the entire matrix exactly once.
 *
 * Space Complexity: O(S1 * S2)
 * - We create a 2D matrix of size (S1+1) x (S2+1).
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const M = s1.length;
  const N = s2.length;

  // 1. Hard constraint!
  if (M + N !== s3.length) {
    return false;
  }

  // 2. Create the DP Table filled with false
  const dp = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(false));

  // 3. Base Case: Two empty strings perfectly interleave into an empty string!
  dp[0][0] = true;

  // 4. Base Case: Col 0 (s2 is empty)
  // We can only pull from s1. The chain is broken the moment a letter doesn't match!
  for (let r = 1; r <= M; r++) {
    dp[r][0] = s1[r - 1] === s3[r - 1] && dp[r - 1][0];
  }

  // 5. Base Case: Row 0 (s1 is empty)
  // We can only pull from s2. The chain is broken the moment a letter doesn't match!
  for (let c = 1; c <= N; c++) {
    dp[0][c] = s2[c - 1] === s3[c - 1] && dp[0][c - 1];
  }

  // 6. Loop through the grid
  for (let r = 1; r <= M; r++) {
    for (let c = 1; c <= N; c++) {
      // The master card we need to match is the sum of our current cards (minus 1 for 0-index)
      const targetChar = s3[r + c - 1];

      // Choice 1: Does the Red card (s1) match? AND was the path Above us valid?
      const takeS1 = s1[r - 1] === targetChar && dp[r - 1][c];

      // Choice 2: Does the Blue card (s2) match? AND was the path Left of us valid?
      const takeS2 = s2[c - 1] === targetChar && dp[r][c - 1];

      // If EITHER choice works, this cell is a success!
      dp[r][c] = takeS1 || takeS2;
    }
  }

  // 7. The bottom-right corner holds the final answer
  return dp[M][N];
};
