// https://leetcode.com/problems/network-delay-time/description/

// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as
// directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the
// time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal.
// If it is impossible for all the n nodes to receive the signal, return -1.

/**
 * Approach:
 * We need to find the shortest path from a single source node to all other nodes
 * in a weighted directed graph.
 *
 * Idea:
 * We use Dijkstra's Algorithm. We build an adjacency list to represent the graph.
 * We maintain a `distances` array to track the minimum time to reach each node,
 * initialized to Infinity. We use a Min-Priority Queue to always process the
 * most promising (fastest) node first. When we pop a node, we explore its neighbors.
 * If the path through the current node to the neighbor is faster than the neighbor's
 * currently recorded distance, we update the distance and push the neighbor into
 * the priority queue. Finally, the answer is the maximum value in the `distances`
 * array (the time it took to reach the final node).
 *
 * Steps:
 * 1. Build the Adjacency List `graph` from the `times` array.
 * 2. Initialize `distances` array of size `n + 1` filled with `Infinity`.
 * 3. Set `distances[k] = 0` (Our starting point).
 * 4. Initialize a `minQueue` and push `[0, k]` (format: [time, node]).
 * 5. While `minQueue` is not empty:
 *    - Pop the node with the smallest time (simulated via `.shift()` after sorting).
 *    - If the popped time is greater than `distances[node]`, skip it! (We already
 *      found a faster route to this node earlier).
 *    - For each neighbor of this node:
 *        - Calculate `newTime = currentTime + weightToNeighbor`.
 *        - If `newTime < distances[neighbor]`:
 *            - Update `distances[neighbor] = newTime`.
 *            - Push `[newTime, neighbor]` into the `minQueue`.
 *            - Re-sort the queue so the fastest time is at the front.
 * 6. Find the maximum time in `distances` (ignoring index 0). If any node is
 *    still `Infinity`, return -1. Otherwise, return the max time.
 *
 * Time Complexity: O(E log V) (using a proper Min-Heap)
 * - V is nodes, E is edges. Our simulated array sort is O(E * E log E), but in
 *   a real interview you would clarify that a standard Heap achieves O(E log V).
 *
 * Space Complexity: O(V + E)
 * - For the Adjacency List and the Priority Queue.
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 1. Build the Adjacency List
  // graph = { source: [ [target, weight], [target, weight] ] }
  const graph = {};
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }

  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  // 2. Initialize the distances notebook
  const distances = new Array(n + 1).fill(Infinity);
  distances[k] = 0; // We start at k, so it takes 0 seconds to reach ourselves

  // 3. Initialize the Priority Queue
  // Format: [cumulative_time, current_node]
  const minQueue = [];
  minQueue.push([0, k]);

  // 4. Run Dijkstra's!
  while (minQueue.length > 0) {
    // Pop the node with the absolute fastest time (front of the queue)
    const [currTime, u] = minQueue.shift();

    // If we previously found a faster path to 'u', ignore this slower path!
    if (currTime > distances[u]) continue;

    // Explore all neighbors coming out of 'u'
    for (const [v, weight] of graph[u]) {
      // Time to reach 'u' + time to travel the pipe to 'v'
      const newTime = currTime + weight;

      // If we found a strictly faster route to 'v', update the notebook!
      if (newTime < distances[v]) {
        distances[v] = newTime;

        // Add the neighbor to the queue with its new fast time
        minQueue.push([newTime, v]);

        // --- SIMULATED MIN-HEAP ---
        // Re-sort the queue so the fastest times are always at the front [0].
        minQueue.sort((a, b) => a[0] - b[0]);
      }
    }
  }

  // 5. Find the final answer
  let maxTime = 0;
  // (Start at 1 because the nodes are labeled 1 to N. Index 0 is unused garbage).
  for (let i = 1; i <= n; i++) {
    if (distances[i] === Infinity) {
      return -1; // Someone never got the message!
    }
    maxTime = Math.max(maxTime, distances[i]);
  }

  return maxTime;
};
