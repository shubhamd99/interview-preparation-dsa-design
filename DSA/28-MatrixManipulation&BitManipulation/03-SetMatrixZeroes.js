// https://leetcode.com/problems/set-matrix-zeroes/description/

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

/**
 * Approach:
 * We need to set entire rows and columns to 0 if a cell contains a 0, modifying
 * the matrix strictly in-place with O(1) space.
 *
 * Idea:
 * We use the first row and first column of the matrix itself as markers to track
 * which rows and columns need to be zeroed out. Because using the first row/col
 * overwrites their original data, we must first use two boolean variables to
 * determine if the first row/col inherently need to be zeroed out at the very end.
 * Then, we iterate through the rest of the matrix, marking the edges when we find
 * a 0. We iterate a second time to zero out the cells based on the markers.
 * Finally, we zero out the first row and column if our boolean variables dictate it.
 *
 * Steps:
 * 1. Initialize `firstRowHasZero = false` and `firstColHasZero = false`.
 * 2. Scan the first row. If any element is 0, set `firstRowHasZero = true`.
 * 3. Scan the first col. If any element is 0, set `firstColHasZero = true`.
 * 4. Scan the REST of the matrix (r from 1 to ROWS, c from 1 to COLS).
 *    - If `matrix[r][c] === 0`, stamp the markers: `matrix[0][c] = 0` and `matrix[r][0] = 0`.
 * 5. Scan the REST of the matrix again (r from 1, c from 1).
 *    - If the row marker is 0 OR the col marker is 0, set `matrix[r][c] = 0`.
 * 6. Fix the first row: If `firstRowHasZero`, set the entire first row to 0.
 * 7. Fix the first col: If `firstColHasZero`, set the entire first col to 0.
 *
 * Time Complexity: O(M * N)
 * - We iterate through the M x N matrix a few times, but it simplifies to O(M * N).
 *
 * Space Complexity: O(1)
 * - We strictly modify the matrix in-place and only use two boolean variables.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // STEP 1: Check if the first row has any zeroes natively
  for (let c = 0; c < COLS; c++) {
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // STEP 2: Check if the first column has any zeroes natively
  for (let r = 0; r < ROWS; r++) {
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // STEP 3: Scan the rest of the matrix and stamp the edges!
  // Notice we start r and c at 1! We are skipping the edges.
  for (let r = 1; r < ROWS; r++) {
    for (let c = 1; c < COLS; c++) {
      if (matrix[r][c] === 0) {
        // Stamp the top of the column
        matrix[0][c] = 0;
        // Stamp the start of the row
        matrix[r][0] = 0;
      }
    }
  }

  // STEP 4: Execute the wipe on the rest of the matrix
  // Start at 1 again!
  for (let r = 1; r < ROWS; r++) {
    for (let c = 1; c < COLS; c++) {
      // If the stamped marker Above us OR Left of us is 0, wipe this cell
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  // STEP 5: Restore the edges using our saved boolean variables
  if (firstRowHasZero) {
    for (let c = 0; c < COLS; c++) {
      matrix[0][c] = 0;
    }
  }

  if (firstColHasZero) {
    for (let r = 0; r < ROWS; r++) {
      matrix[r][0] = 0;
    }
  }
};
