// https://leetcode.com/problems/cheapest-flights-within-k-stops/

// There are n cities connected by some number of flights. You are given an array flights where
// flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops.
// If there is no such route, return -1.

// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

/**
 * Approach:
 * We need to find the cheapest path from source to destination bounded by a
 * maximum number of stops (K).
 *
 * Idea:
 * This is officially a Weighted Directed Graph (the weights are the flight prices).
 * Normally, we solve Weighted Graphs using Dijkstra's Algorithm (Priority Queue).
 * However, because of the strict "K stops" constraint, Dijkstra completely breaks
 * because it ignores the number of stops to aggressively find cheaper, longer paths!
 *
 * THE TRICK: We hack Breadth-First Search (BFS). BFS is usually only used for
 * Unweighted graphs, but it mathematically guarantees that we process the graph
 * strictly layer-by-layer (flight-by-flight). By giving our BFS a `prices` notebook,
 * we force it to keep track of the weights while maintaining strict stop boundaries!
 *
 * Steps:
 * 1. Build an Adjacency List from the `flights` array.
 * 2. Initialize a `prices` array filled with Infinity. Set `prices[src] = 0`.
 * 3. Initialize a standard `queue`. Push `[src, 0, 0]` (city, cost, flightsTaken).
 * 4. While the queue is not empty:
 *    - Pop the front of the queue using `.shift()`.
 *    - If `flightsTaken === K + 1`, skip! (We cannot take any more flights).
 *    - For each neighbor `[nextCity, price]`:
 *        - `newCost = currentCost + price`.
 *        - If `newCost < prices[nextCity]`:
 *            - Update `prices[nextCity] = newCost`.
 *            - Push `[nextCity, newCost, flightsTaken + 1]` to the queue.
 * 5. Return `prices[dst]`. If it is still Infinity, return -1.
 *
 * Time Complexity: O(V + E * K)
 * - V is vertices (cities), E is edges (flights). We process each edge at most
 *   K times because of our BFS level constraints.
 *
 * Space Complexity: O(V + E)
 * - For the Adjacency List, the `prices` notebook, and the Queue.
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // 1. Build the Adjacency List
  // graph = { source: [ [target, price] ] }
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];

  for (const [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  // 2. Initialize the prices notebook
  const prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  // 3. Initialize standard BFS Queue
  // Format: [current_city, cumulative_cost, flights_taken]
  const queue = [];
  queue.push([src, 0, 0]);

  // 4. Run BFS!
  while (queue.length > 0) {
    // Use a normal queue (First-In, First-Out), no priority sorting!
    const [currCity, currCost, flights] = queue.shift();

    // K stops means we can take a maximum of K + 1 flights.
    // If we hit the limit, we cannot board another plane from this city!
    if (flights === k + 1) {
      continue;
    }

    // Explore all outgoing flights
    for (const [nextCity, price] of graph[currCity]) {
      const newCost = currCost + price;

      // If we found a strictly cheaper way to reach the next city,
      // update the notebook and hop on the plane!
      if (newCost < prices[nextCity]) {
        prices[nextCity] = newCost;

        // Add the next city to the queue with our updated tickets
        queue.push([nextCity, newCost, flights + 1]);
      }
    }
  }

  // 5. Check if we ever reached the destination
  return prices[dst] === Infinity ? -1 : prices[dst];
};
