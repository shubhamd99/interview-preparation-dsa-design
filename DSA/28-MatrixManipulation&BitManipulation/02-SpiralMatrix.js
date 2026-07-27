// https://leetcode.com/problems/spiral-matrix/description/

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

/**
 * Approach:
 * We need to return the elements of an M x N matrix in spiral order.
 *
 * Idea:
 * We use the "Four Boundaries" (top, bottom, left, right) matrix manipulation
 * pattern. We peel the matrix layer by layer like an onion. We traverse the
 * top boundary, then move the top boundary down. We traverse the right boundary,
 * then move the right boundary left. We do the same for the bottom and left
 * boundaries. The key trap is ensuring that after we shrink the top/right
 * boundaries, we haven't crossed paths before we attempt the bottom/left traversals
 * (which happens with non-square rectangular matrices).
 *
 * Steps:
 * 1. Initialize an empty `result` array.
 * 2. Define the 4 boundaries: `top = 0`, `bottom = matrix.length - 1`,
 *    `left = 0`, `right = matrix[0].length - 1`.
 * 3. Loop `while (left <= right && top <= bottom)`:
 *    - Step 1 (Top Row): Loop `c` from `left` to `right`. Push `matrix[top][c]`.
 *      Then `top++`.
 *    - Step 2 (Right Col): Loop `r` from `top` to `bottom`. Push `matrix[r][right]`.
 *      Then `right--`.
 *    - IMPORTANT CHECK: If `top > bottom` or `left > right`, break out of the
 *      loop early so we don't accidentally walk backward over elements we already
 *      processed!
 *    - Step 3 (Bottom Row): Loop `c` from `right` down to `left`. Push `matrix[bottom][c]`.
 *      Then `bottom--`.
 *    - Step 4 (Left Col): Loop `r` from `bottom` down to `top`. Push `matrix[r][left]`.
 *      Then `left++`.
 * 4. Return the `result` array.
 *
 * Time Complexity: O(M * N)
 * - We visit every single element in the M x N matrix exactly once.
 *
 * Space Complexity: O(1)
 * - We use 4 pointers for boundaries. The output array `result` is required
 *   for the return format and doesn't count against auxiliary space.
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  const result = [];

  // The Four Walls
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // Keep going until the walls crush into each other!
  while (left <= right && top <= bottom) {
    // 1. Walk the Top Row (Left to Right)
    for (let c = left; c <= right; c++) {
      result.push(matrix[top][c]);
    }

    // Crush the top wall down
    top++;

    // 2. Walk the Right Column (Top to Bottom)
    for (let r = top; r <= bottom; r++) {
      result.push(matrix[r][right]);
    }

    // Crush the right wall left
    right--;

    // --- THE TRAP CHECK ---
    // If the matrix was a rectangle, moving the walls might have just caused
    // them to overlap! If they crossed, we are done!
    if (top > bottom || left > right) {
      break;
    }

    // 3. Walk the Bottom Row (Right to Left)
    for (let c = right; c >= left; c--) {
      result.push(matrix[bottom][c]);
    }

    // Crush the bottom wall up
    bottom--;

    for (let r = bottom; r >= top; r--) {
      result.push(matrix[r][left]);
    }

    // Crush the left wall right
    left++;
  }

  return result;
};
