// https://leetcode.com/problems/rotate-image/description/

// Matrix Manipulation The process of programmatically creating, modifying, traversing, or querying a multi-dimensional array
// (most commonly a 2D array or grid). This involves navigating rows and columns to perform mathematical operations,
// geometric transformations (like rotations or transpositions), or pathfinding algorithms without exceeding
// the strict boundaries of the data structure.

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

/**
 * Approach:
 * We need to rotate an N x N 2D matrix 90 degrees clockwise in-place.
 *
 * Idea:
 * Instead of attempting complex 4-way coordinate swapping, we use a standard
 * matrix manipulation trick: Transpose then Reverse.
 * 1. Transpose: We convert all rows to columns by swapping `matrix[r][c]` with
 *    `matrix[c][r]`. We only iterate through the top-right triangle of the matrix
 *    (where `c > r`) to prevent swapping elements twice (which would just undo
 *    the transpose).
 * 2. Reverse: We iterate through every row and use the standard JS `.reverse()`
 *    method (which modifies the array in-place) to flip the row horizontally.
 * The result is a perfect 90-degree clockwise rotation.
 *
 * Steps:
 * 1. Initialize `N = matrix.length`.
 * 2. Transpose the Matrix:
 *    - Loop `r` from 0 to N.
 *    - Loop `c` from `r + 1` to N (We start at `r + 1` to only touch the upper triangle).
 *        - Swap `matrix[r][c]` and `matrix[c][r]` using a temporary variable.
 * 3. Reverse each Row:
 *    - Loop `r` from 0 to N.
 *        - Call `matrix[r].reverse()`.
 *
 * Time Complexity: O(N^2)
 * - Where N is the number of rows/cols. The Transpose step visits half the cells
 *   O(N^2 / 2), and the Reverse step visits all cells O(N^2). This simplifies to O(N^2).
 *
 * Space Complexity: O(1)
 * - We only use a single temporary variable for swapping. We manipulate the
 *   matrix strictly in-place as required.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const N = matrix.length;

  // STEP 1: Transpose the Matrix (Flip over the main diagonal)
  for (let r = 0; r < N; r++) {
    // Notice that 'c' starts at 'r + 1'!
    // We only want to swap the top-right half of the triangle.
    // If we started at 0, we would swap everything twice and undo our work.
    for (let c = r + 1; c < N; c++) {
      // Standard swap using a temporary variable
      const temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }

  // STEP 2: Reverse every Row (Flip horizontally)
  for (let r = 0; r < N; r++) {
    // JS arrays have a built-in reverse method that modifies in-place!
    matrix[r].reverse();
  }
};

// --- EXAMPLE TRACE: Rotate Image ---

// Input Matrix (N = 3):
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]

// =========================================================
// STEP 1: TRANSPOSE (Flip over the main diagonal)
// =========================================================
// - Row (r) = 0
//   - Col (c) = 1 (Starts at r + 1!):
//     Swap [0][1] (2) with [1][0] (4).
//     Matrix is now:
//     [ 1, 4, 3 ]
//     [ 2, 5, 6 ]
//     [ 7, 8, 9 ]

//   - Col (c) = 2:
//     Swap [0][2] (3) with [2][0] (7).
//     Matrix is now:
//     [ 1, 4, 7 ]
//     [ 2, 5, 6 ]
//     [ 3, 8, 9 ]

// - Row (r) = 1
//   - Col (c) = 2 (Starts at r + 1!):
//     Swap [1][2] (6) with [2][1] (8).
//     Matrix is now:
//     [ 1, 4, 7 ]
//     [ 2, 5, 8 ]
//     [ 3, 6, 9 ]

// - Row (r) = 2
//   - Col (c) = 3 (Starts at r + 1!). Since 3 < N is FALSE, this loop skips!

// (Transpose Complete! Notice how all the original Rows are now Columns!)

// =========================================================
// STEP 2: REVERSE EACH ROW
// =========================================================
// - Row (r) = 0:
//   Reverse [ 1, 4, 7 ]  ->  [ 7, 4, 1 ]

// - Row (r) = 1:
//   Reverse [ 2, 5, 8 ]  ->  [ 8, 5, 2 ]

// - Row (r) = 2:
//   Reverse [ 3, 6, 9 ]  ->  [ 9, 6, 3 ]

// =========================================================
// FINAL RESULT
// =========================================================
// [ 7, 4, 1 ]
// [ 8, 5, 2 ]
// [ 9, 6, 3 ]
