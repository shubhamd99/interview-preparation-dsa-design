// https://leetcode.com/problems/maximal-square/

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

/**
 * Approach:
 * We need to find the largest square containing only 1s in a binary matrix and
 * return its area.
 *
 * Idea:
 * We use 2D Dynamic Programming (Tabulation). We build a `dp` matrix where
 * `dp[r][c]` stores the side length of the maximum square whose bottom-right
 * corner is at `(r, c)`. If the current cell is a '1', its maximum square size
 * is limited by the smallest square size of its top, left, and top-left diagonal
 * neighbors. We use the +1 Buffer Trick to avoid out-of-bounds checks for the
 * first row and column. We maintain a global `maxSideLength` tracker. At the
 * end, we return `maxSideLength * maxSideLength` to give the area.
 *
 * Steps:
 * 1. Initialize a 2D `dp` array of size `[ROWS + 1][COLS + 1]` filled with `0`s.
 *    Row 0 and Col 0 act as our safe boundaries.
 * 2. Initialize `maxSideLength = 0`.
 * 3. Loop `r` from 1 to `ROWS`:
 *    - Loop `c` from 1 to `COLS`:
 *        - Check the original matrix (remember to use r-1 and c-1 due to buffer).
 *        - If `matrix[r-1][c-1] === '1'`:
 *            - The Magic Formula: Take the Min of Left, Above, and Diagonal, then add 1.
 *              `dp[r][c] = 1 + Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])`
 *            - Update `maxSideLength = Math.max(maxSideLength, dp[r][c])`
 * 4. Return the area: `maxSideLength ** 2`.
 *
 * Time Complexity: O(M * N)
 * - We iterate through the M x N grid exactly once.
 *
 * Space Complexity: O(M * N)
 * - We create a 2D DP matrix of size (M+1) x (N+1).
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (matrix.length === 0) return 0;

  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  // 1. Create a 2D DP Table of size (ROWS+1) x (COLS+1) filled with 0s.
  // The top row and left column will act as our safety buffers.
  const dp = new Array(ROWS + 1).fill(0).map(() => new Array(COLS + 1).fill(0));

  let maxSideLength = 0;

  // 2. Loop through the grid (starting at 1 to skip the buffer!)
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      // Check the actual value in the original matrix
      const cellValue = matrix[r - 1][c - 1];

      if (cellValue === "1") {
        // RULE: 1 + Min(Left, Above, Diagonal)
        // The square can only grow as large as its weakest neighbor!
        const left = dp[r][c - 1];
        const above = dp[r - 1][c];
        const diagonal = dp[r - 1][c - 1];

        dp[r][c] = 1 + Math.min(left, above, diagonal);

        // Track the absolute largest side length we ever generate
        maxSideLength = Math.max(maxSideLength, dp[r][c]);
      }
    }
  }

  // 3. Return the Area (Side Length Squared)
  return maxSideLength * maxSideLength;
};
