// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Explanation:

/**
 * Approach:
 * We need to perform a preorder traversal (Root, Left, Right) on a Binary Tree.
 *
 * Idea:
 * We implement the Iterative approach using a custom `stack` array.
 * Because Preorder processes the Root node first, we can immediately process
 * whatever node we pop off the stack. The critical trick is remembering that
 * a stack is LIFO (Last In, First Out). To ensure the Left child is processed
 * before the Right child, we must push the Right child onto the stack first,
 * followed by the Left child. This guarantees the Left child sits on top and
 * gets popped next.
 *
 * Steps:
 * 1. Base Case: If the root is null, return an empty array.
 * 2. Initialize an empty `result` array and a `stack` array containing the `root`.
 * 3. Loop `while (stack.length > 0)`:
 *    - Pop the top node from the stack.
 *    - Process it: `result.push(node.val)`.
 *    - Check for Right Child: If it exists, push it to the stack FIRST!
 *    - Check for Left Child: If it exists, push it to the stack SECOND!
 * 4. Return the `result` array.
 *
 * Time Complexity: O(N)
 * - We visit every single node in the Binary Tree exactly once.
 *
 * Space Complexity: O(N)
 * - In the worst-case scenario (a completely unbalanced tree that is just a
 *   single straight line to the left or right), our `stack` will hold all nodes.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return [];

  const result = [];

  // 1. Manually create our own Call Stack, starting with the root
  const stack = [root];

  // 2. Keep going until the stack is totally empty
  while (stack.length > 0) {
    // STEP A: Pop the top node
    const node = stack.pop();

    // STEP B: Process the node (Root comes FIRST in Preorder!)
    result.push(node.val);

    // STEP C: Push the RIGHT child first!
    // Because a stack is LIFO, pushing Right first ensures it goes to the bottom,
    // and the Left child will sit on top of it!
    if (node.right !== null) {
      stack.push(node.right);
    }

    // STEP D: Push the LEFT child second!
    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return result;
};
