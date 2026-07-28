// https://leetcode.com/problems/search-a-2d-matrix/description/

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

/**
 * Approach:
 * We need to find a target value in a 2D matrix that is strictly sorted both
 * row-by-row and across row boundaries, in O(log(m * n)) time.
 *
 * Idea:
 * Because of the strict sorting rules, the 2D matrix is mathematically identical
 * to a perfectly sorted 1D array of length `ROWS * COLS`.
 * We can run a standard Binary Search by treating the matrix as a 1D array with
 * pointers `left = 0` and `right = (ROWS * COLS) - 1`.
 * To access the actual value in the matrix during the search, we convert the
 * 1D `mid` index back into 2D coordinates using the formulas:
 * - Row = Math.floor(mid / COLS)
 * - Col = mid % COLS
 *
 * Steps:
 * 1. Define `ROWS` and `COLS`.
 * 2. Set Binary Search pointers: `left = 0` and `right = (ROWS * COLS) - 1`.
 * 3. While `left <= right`:
 *    - Calculate `mid = Math.floor((left + right) / 2)`.
 *    - Unflatten the `mid` index into 2D coordinates:
 *      `r = Math.floor(mid / COLS)` and `c = mid % COLS`.
 *    - Get the `val = matrix[r][c]`.
 *    - If `val === target`, return `true`!
 *    - If `val < target`, we need to search higher. `left = mid + 1`.
 *    - If `val > target`, we need to search lower. `right = mid - 1`.
 * 4. If the loop finishes without returning true, the target doesn't exist. Return `false`.
 *
 * Time Complexity: O(log(M * N))
 * - We perform a standard Binary Search over M * N elements.
 *
 * Space Complexity: O(1)
 * - We only use pointers for the Binary Search, utilizing the matrix in-place.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return 0;

  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  // Treat the matrix as a flattened 1D array
  let left = 0;
  let right = ROWS * COLS - 1;

  // Standard Binary Search
  while (left <= right) {
    // Find the middle index of our virtual 1D array
    const mid = Math.floor((left + right) / 2);

    // --- THE MAGIC FORMULA ---
    // Convert the 1D 'mid' index back into 2D [row][col] coordinates
    const r = Math.floor(mid / COLS);
    const c = mid % COLS;

    const val = matrix[r][c];

    if (val === target) {
      return true;
    } else if (val < target) {
      // Target is bigger, shrink the left wall past mid
      left = mid + 1;
    } else {
      // Target is smaller, shrink the right wall past mid
      right = mid - 1;
    }
  }

  // Target was not found
  return false;
};
