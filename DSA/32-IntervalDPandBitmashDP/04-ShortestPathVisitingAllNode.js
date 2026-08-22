// https://leetcode.com/problems/shortest-path-visiting-all-nodes/description/ - HARD

// You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where
// graph[i] is a list of all the nodes connected with node i by an edge.

// Return the length of the shortest path that visits every node. You may start and stop at any node,
// you may revisit nodes multiple times, and you may reuse edges.

// Input: graph = [[1,2,3],[0],[0],[0]]
// Output: 4
// Explanation: One possible path is [1,0,2,0,3]

/**
 * Approach:
 * We need to find the shortest path that visits every node in an unweighted graph,
 * allowing node revisits.
 *
 * Idea:
 * We use a Breadth-First Search (BFS) combined with a Bitmask. The BFS guarantees
 * the shortest path. The Bitmask tracks which nodes we have visited on a specific
 * path. To prevent infinite loops while allowing valid revisits, our `visited` Set
 * tracks unique `(node, mask)` string states. If we arrive at a node with a mask
 * we've already seen at that exact node, it's a redundant loop. If the mask is new,
 * we are making progress! We start by enqueuing every node, and the first path to
 * reach the fully-lit mask `(1 << n) - 1` is the winner.
 *
 * Steps:
 * 1. Define `N`. If `N === 1`, return 0.
 * 2. Define the target mask `(1 << N) - 1` (All switches ON).
 * 3. Initialize the BFS `queue` and the `visited` Set.
 * 4. Push every node `i` into the queue format: `[i, 1 << i, 0]` (node, mask, length).
 *    Add `i,mask` to the visited Set.
 * 5. While queue is not empty:
 *    - Pop `[node, mask, length]`.
 *    - Loop through all `neighbor`s of `node`:
 *        - Turn on the neighbor's light switch: `newMask = mask | (1 << neighbor)`.
 *        - If `newMask === targetMask`, we are done! Return `length + 1`.
 *        - Create the state string: `state = neighbor + "," + newMask`.
 *        - If `visited` doesn't have `state`:
 *            - Add it to `visited`.
 *            - Push `[neighbor, newMask, length + 1]` to the queue.
 * 6. Return 0.
 *
 * Time Complexity: O(N * 2^N)
 * - There are N nodes and 2^N possible masks. The maximum number of unique states
 *   in our BFS queue is N * 2^N.
 *
 * Space Complexity: O(N * 2^N)
 * - For the `visited` Set and the BFS Queue holding all possible states.
 */

/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
  const n = graph.length;

  // Edge case: If there is only 1 node, it takes 0 steps to visit it!
  if (n === 1) return 0;

  // The winning mask: a binary number with exactly `n` ones (e.g. 1111)
  const targetMask = (1 << n) - 1;

  // Standard BFS Queue
  const queue = [];
  const visited = new Set();

  // We can start at ANY node. So we line them all up at the starting line!
  for (let i = 0; i < n; i++) {
    const initialMask = 1 << i;
    queue.push([i, initialMask, 0]);

    // Save state as a string: "node,mask"
    visited.add(`${i}.${initialMask}`);
  }

  // Run the BFS Race!
  while (queue.length > 0) {
    // Pop the front of the queue
    const [currNode, currMask, currLength] = queue.shift();

    // Explore all connected neighbors
    for (const neighbor of graph[currNode]) {
      // Flip the neighbor's light switch ON
      const newMask = currMask | (1 << neighbor);

      // Did we just turn on the final light switch? We won!
      if (newMask === targetMask) {
        return currLength + 1;
      }

      // Generate the unique state string for this visit
      const state = `${neighbor},${newMask}`;

      // If we have NEVER arrived at this neighbor with this specific
      // combination of visited nodes before, it's a valid new path!
      if (!visited.has(state)) {
        visited.add(state);
        queue.push([neighbor, newMask, currLength + 1]);
      }
    }
  }

  return 0;
};
