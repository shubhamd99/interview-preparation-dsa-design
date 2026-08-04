// https://leetcode.com/problems/linked-list-random-node/description/

// Given a singly linked list, return a random node's value from the linked list.
// Each node must have the same probability of being chosen.

// Implement the Solution class:
// Solution(ListNode head) Initializes the object with the head of the singly-linked list head.
// int getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.

// Input
// ["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[[1, 2, 3]], [], [], [], [], []]
// Output
// [null, 1, 3, 2, 2, 3]

/**
 * Approach:
 * We need to pick a random node from a singly linked list with equal probability,
 * using O(1) extra space.
 *
 * Idea:
 * Since we do not know the length of the linked list in advance, this is the
 * perfect scenario for Reservoir Sampling. When `getRandom()` is called, we
 * traverse the linked list. For the `i-th` node we encounter, we give it a `1/i`
 * chance of being selected as our current result. By the time we reach the end
 * of the linked list, the mathematical probability balances perfectly, ensuring
 * every node had a uniform `1/N` chance of surviving as the final result.
 *
 * Steps:
 * 1. Constructor: Simply save a reference to the `head` of the linked list.
 * 2. getRandom:
 *    - Initialize `count = 0` and `result = 0`.
 *    - Create a pointer `curr = this.head`.
 *    - Loop `while (curr !== null)`:
 *        - Increment `count` by 1.
 *        - Roll the dice: `const randomChance = Math.floor(Math.random() * count)`.
 *        - If it lands on `0`, update `result = curr.val`.
 *        - Move pointer forward: `curr = curr.next`.
 *    - Return `result`.
 *
 * Time Complexity:
 * - Constructor: O(1)
 * - getRandom: O(N) because we traverse the linked list exactly once.
 *
 * Space Complexity: O(1)
 * - We only use `count`, `result`, and `curr` variables. No extra memory is used.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  // Save the reference to the start of the Linked List
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let count = 0;
  let result = 0;

  let curr = this.head;

  // Traverse the stream of data!
  while (curr !== null) {
    count++;

    // --- RESERVOIR SAMPLING MAGIC ---
    // Generate a random number from 0 to (count - 1)
    const randomChance = Math.floor(Math.random() * count);

    // If it hits 0 (a 1-in-count chance), overwrite the result!
    // The - 1 is not actually written in the code because it is mathematically hidden
    // inside how JavaScript's Math.random() and Math.floor() functions work!
    if (randomChance === 0) {
      result = curr.val;
    }

    // Move to the next node
    curr = curr.next;
  }

  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
