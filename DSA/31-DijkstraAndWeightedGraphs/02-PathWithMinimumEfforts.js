// https://leetcode.com/problems/path-with-minimum-effort/description/

// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns,
// where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0),
// and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed).
// You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

/**
 * Approach:
 * We need to find a path from the top-left to the bottom-right of a 2D grid
 * that minimizes the maximum absolute difference in heights between adjacent cells.
 *
 * Idea:
 * We use Dijkstra's Algorithm adapted for a 2D grid. We maintain a 2D `efforts`
 * array initialized to Infinity to track the minimum effort required to reach
 * each cell. We use a Min-Priority Queue to process the most promising paths
 * (lowest effort) first. When exploring a cell's 4 neighbors, the effort to
 * reach a neighbor is `Math.max(current_path_effort, height_difference)`. If
 * this new effort is less than the neighbor's recorded effort, we update the
 * notebook and push the neighbor to the queue. The moment we pop the destination
 * cell from the queue, we have found the absolute minimum effort path.
 *
 * Steps:
 * 1. Define ROWS and COLS. Define the 4 directions (Up, Down, Left, Right).
 * 2. Create a 2D `efforts` array filled with Infinity. Set `efforts[0][0] = 0`.
 * 3. Initialize a `minQueue` and push `[0, 0, 0]` (format: [effort, row, col]).
 * 4. While `minQueue` is not empty:
 *    - Pop the cell with the smallest effort.
 *    - If we just popped the destination cell `(ROWS - 1, COLS - 1)`, RETURN the effort!
 *    - If `currEffort > efforts[r][c]`, skip it (found a faster path earlier).
 *    - For each of the 4 neighbors:
 *        - Check boundaries (don't walk off the grid).
 *        - Calculate `cliff` = Math.abs(height[r][c] - height[newR][newC]).
 *        - Calculate `newEffort` = Math.max(currEffort, cliff).
 *        - If `newEffort < efforts[newR][newC]`:
 *            - Update `efforts[newR][newC] = newEffort`.
 *            - Push `[newEffort, newR, newC]` to queue.
 *            - Re-sort the queue so the smallest effort is at the front [0].
 * 5. Return 0 (fallback).
 *
 * Time Complexity: O(E log V) -> O(M * N log(M * N))
 * - M and N are the dimensions of the grid. There are roughly 4 * M * N edges.
 *   Our simulated array sort adds overhead, but a proper Min-Heap achieves this time.
 *
 * Space Complexity: O(M * N)
 * - For the 2D `efforts` notebook and the Priority Queue.
 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  // Define the 4 directions we can walk: [row_offset, col_offset]
  // [Down, Up, Right, Left]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  // 1. Initialize the 2D notebook!
  const efforts = new Array(ROWS)
    .fill(0)
    .map(() => new Array(COLS).fill(Infinity));
  efforts[0][0] = 0; // Starting point takes 0 effort

  // 2. Initialize the Priority Queue (Using LeetCode's built-in MinPriorityQueue)
  // We tell it to prioritize (sort by) the 0th index, which is the effort!
  // Format: [cumulative_effort, row, col]
  const minQueue = new PriorityQueue((a, b) => a[0] - b[0]);
  minQueue.enqueue([0, 0, 0]); // Use .enqueue() instead of .push()

  // 3. Run Dijkstra's!
  while (!minQueue.isEmpty()) {
    // Pop the cell with the absolute smallest effort
    // .dequeue() returns an object, so we extract our array from the 'element' property
    const [currEffort, r, c] = minQueue.dequeue();

    // --- EARLY EXIT MAGIC ---
    // Because of Dijkstra, the FIRST time we pop the destination, it is guaranteed
    // to be the absolute minimum path!
    if (r === ROWS - 1 && c === COLS - 1) {
      return currEffort;
    }

    // If we found a better path to this cell earlier, skip!
    if (currEffort > efforts[r][c]) continue;

    // Explore all 4 neighbors
    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      // Don't walk off the edge of the map!
      if (newR >= 0 && newR < ROWS && newC >= 0 && newC < COLS) {
        // Calculate the steepness of the cliff we just climbed
        const cliff = Math.abs(heights[r][c] - heights[newR][newC]);

        // The effort of the path is the LARGEST cliff we had to climb
        const newEffort = Math.max(currEffort, cliff);

        // If this path requires less effort than the notebook says, update it!
        if (newEffort < efforts[newR][newC]) {
          efforts[newR][newC] = newEffort;

          // Push to queue using .enqueue()
          // We DO NOT need to sort anymore, the MinPriorityQueue does it instantly!
          minQueue.enqueue([newEffort, newR, newC]);
        }
      }
    }
  }

  return 0;
};
