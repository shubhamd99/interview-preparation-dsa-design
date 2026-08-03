// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

/**
 * Approach:
 * We need to perform an inorder traversal (Left, Root, Right) on a Binary Tree.
 *
 * Idea:
 * While a recursive solution is trivial, we implement the Iterative approach
 * (Unrolling Recursion) to avoid Call Stack limits. We manually manage our own
 * `stack` array. We use a pointer `curr` starting at the root.
 * We use an outer `while` loop that runs as long as there are nodes in the tree
 * or nodes waiting in our stack. Inside, we use an inner `while` loop to aggressively
 * traverse as far left as possible, pushing every node onto the stack. Once we
 * hit a null (no more left children), we pop a node from the stack, process its
 * value (Root), and then move our pointer to its Right child.
 *
 * Steps:
 * 1. Initialize an empty `result` array and an empty `stack` array.
 * 2. Set a pointer `curr = root`.
 * 3. Loop `while (curr !== null || stack.length > 0)`:
 *    - Inner Loop: `while (curr !== null)`:
 *        - Push `curr` onto the `stack`.
 *        - Move left: `curr = curr.left`.
 *    - Once we hit rock bottom (null), `pop()` the top node from the `stack`.
 *    - Process it: `result.push(curr.val)`.
 *    - Move right: `curr = curr.right`.
 * 4. Return the `result` array.
 *
 * Time Complexity: O(N)
 * - We visit every single node in the Binary Tree exactly once.
 *
 * Space Complexity: O(N)
 * - In the worst-case scenario (a completely unbalanced tree that is just a
 *   single straight line to the left), our `stack` will hold all N nodes.
 *   (Average space is O(H) where H is the height of the tree).
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
var inorderTraversal = function (root) {
  const result = [];

  // 1. Manually create our own Call Stack
  const stack = [];
  let curr = root;

  // 2. Keep going until we run out of nodes AND the stack is totally empty
  while (curr !== null || stack.length > 0) {
    // STEP A: Aggressively dive as far LEFT as possible
    while (curr !== null) {
      stack.push(curr); // Save this node for later!
      curr = curr.left;
    }

    // STEP B: We hit a dead end! Pop the last node we saved.
    curr = stack.pop();

    // STEP C: Process the node (Root)
    result.push(curr.val);

    // STEP D: Move to the RIGHT child (and repeat the whole process!)
    curr = curr.right;
  }

  return result;
};

// --- EXAMPLE TRACE: Iterative Inorder Traversal ---

// Input: root = [1, null, 2, 3]
// Initial State: stack = [], result = [], curr = Node(1)

// =========================================================
// OUTER LOOP 1: curr is Node(1)
// =========================================================
// 1. Dive Left!
//    - Push Node(1) to stack. [Stack: 1]
//    - Move curr to Node(1).left -> (null).
//    - curr is null, so inner loop stops.

// 2. Pop & Process!
//    - Pop Node(1) from stack. [Stack: Empty]
//    - Push 1 to result! [Result: 1]

// 3. Move Right!
//    - curr = Node(1).right -> Node(2).

// =========================================================
// OUTER LOOP 2: curr is Node(2)
// =========================================================
// 1. Dive Left!
//    - Push Node(2) to stack. [Stack: 2]
//    - Move curr to Node(2).left -> Node(3).
//    - Push Node(3) to stack. [Stack: 2, 3]
//    - Move curr to Node(3).left -> (null).
//    - curr is null, inner loop stops.

// 2. Pop & Process!
//    - Pop Node(3) from stack. [Stack: 2]
//    - Push 3 to result! [Result: 1, 3]

// 3. Move Right!
//    - curr = Node(3).right -> (null).

// =========================================================
// OUTER LOOP 3: curr is (null), BUT Stack is [2]!
// =========================================================
// 1. Dive Left!
//    - curr is already null! Inner loop skips completely.

// 2. Pop & Process!
//    - Pop Node(2) from stack. [Stack: Empty]
//    - Push 2 to result! [Result: 1, 3, 2]

// 3. Move Right!
//    - curr = Node(2).right -> (null).

// =========================================================
// FINISHED!
// =========================================================
// The while loop condition (curr !== null || stack.length > 0) is now FALSE!
// Both curr is null, and the stack is totally empty!

// Final Result: [1, 3, 2]
