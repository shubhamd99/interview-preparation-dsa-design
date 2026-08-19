// https://leetcode.com/problems/swim-in-rising-water/description/ - HARD

// You are given an n x n integer matrix grid where each value grid[i][j] represents the
// elevation at that point (i, j).

// It starts raining, and water gradually rises over time.
// At time t, the water level is t, meaning any cell with elevation less than equal to t is submerged or reachable.

// You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both
// squares individually are at most t.
// You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

// Return the minimum time until you can reach the bottom right square (n - 1, n - 1).
// if you start at the top left square (0, 0).

// Input: grid = [[0,2],[1,3]]
// Output: 3
// Explanation:
// At time 0, you are in grid location (0, 0).
// You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
// You cannot reach point (1, 1) until time 3.
// When the depth of water is 3, we can swim anywhere inside the grid.

// Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// Output: 16
// Explanation: The final route is shown.
// We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

/**
 * Approach:
 * We need to find a path from the top-left to the bottom-right of a 2D grid
 * that minimizes the maximum elevation encountered along the way.
 *
 * Idea:
 * We use Dijkstra's Algorithm on a 2D grid using a Min-Priority Queue.
 * We track the minimum time required to reach each cell in a 2D `times` notebook.
 * When exploring a neighbor, the time required to swim to it is the maximum between
 * our current path's time and the elevation of the neighbor.
 * `newTime = Math.max(currentTime, grid[newRow][newCol])`.
 * The first time the Priority Queue pops the destination cell, we are mathematically
 * guaranteed to have found the absolute fastest time.
 *
 * Steps:
 * 1. Define N (grid is N x N) and the 4 directional offsets.
 * 2. Create a 2D `times` notebook filled with Infinity.
 * 3. Set the starting time to `grid[0][0]`.
 * 4. Initialize `PriorityQueue` sorting by the 0th index (the time).
 * 5. Push `[grid[0][0], 0, 0]` into the queue.
 * 6. While queue is not empty:
 *    - Pop `[currTime, r, c]`.
 *    - If it's the destination `(N-1, N-1)`, return `currTime`.
 *    - If `currTime > times[r][c]`, skip.
 *    - Explore 4 neighbors:
 *        - If within bounds:
 *            - `newTime = Math.max(currTime, grid[newR][newC])`.
 *            - If `newTime < times[newR][newC]`:
 *                - Update notebook: `times[newR][newC] = newTime`.
 *                - Enqueue: `[newTime, newR, newC]`.
 * 7. Return 0.
 *
 * Time Complexity: O(N^2 log(N^2))
 * - N is the length of one side of the grid. There are N^2 total cells (vertices).
 *   Popping from the heap takes log(V), resulting in V log V.
 *
 * Space Complexity: O(N^2)
 * - For the 2D `times` notebook and the Priority Queue.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const N = grid.length;

  // Define the 4 directions we can swim: [row_offset, col_offset]
  // [Down, Up, Right, Left]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  // 1. Initialize the 2D notebook!
  const times = new Array(N).fill(0).map(() => new Array(N).fill(Infinity));

  // We are stuck on the first square until the water reaches its height
  times[0][0] = grid[0][0];

  // 2. Initialize the Version 5 LeetCode Priority Queue
  // Format: [cumulative_time, row, col]
  const minQueue = new PriorityQueue((a, b) => a[0] - b[0]);
  minQueue.enqueue([grid[0][0], 0, 0]);

  // 3. Run Dijkstra's!
  while (!minQueue.isEmpty()) {
    const [currTime, r, c] = minQueue.dequeue();

    // --- EARLY EXIT MAGIC ---
    if (r === N - 1 && c === N - 1) {
      return currTime;
    }

    // If we found a faster way to reach this cell earlier, skip!
    if (currTime > times[r][c]) continue;

    // Explore all 4 neighbors
    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      // Don't swim off the edge of the map!
      if (newR >= 0 && newR < N && newC >= 0 && newC < N) {
        // The time to reach the neighbor is either the time we've already
        // waited, or the neighbor's height, whichever is LARGER.
        const newTime = Math.max(currTime, grid[newR][newC]);

        // If this path is faster than what's written in the notebook, update it!
        if (newTime < times[newR][newC]) {
          times[newR][newC] = newTime;
          minQueue.enqueue([newTime, newR, newC]);
        }
      }
    }
  }

  return 0;
};
