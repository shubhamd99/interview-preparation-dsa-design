// https://leetcode.com/problems/range-sum-query-mutable/description/

// Given an integer array nums, handle multiple queries of the following types:

// Update the value of an element in nums.
// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// void update(int index, int val) Updates the value of nums[index] to be val.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Input
// ["NumArray", "sumRange", "update", "sumRange"]
// [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
// Output
// [null, 9, null, 8]

/**
 * Approach:
 * We need to handle range sum queries and point updates on an array, both in
 * O(log N) time.
 *
 * Idea:
 * A Segment Tree perfectly balances updates and queries. We build a binary tree
 * (represented implicitly in a 1D array of size 4*N) where the leaves are the
 * array elements and each parent node stores the sum of its children.
 * - When `update` is called, we recursively traverse down to the specific leaf,
 *   update it, and then update the sums of all its parent nodes as we travel back up.
 * - When `sumRange` is called, we recursively traverse the tree. If a node's
 *   range is completely inside our target query range, we return its pre-calculated
 *   sum immediately. If it's partially inside, we split the query to its children.
 *
 * Steps:
 * 1. Constructor: Initialize `this.n` and `this.tree = new Array(4 * n)`. Call
 *    the recursive `build` function.
 * 2. `build(node, start, end)`:
 *    - Base Case: If `start === end`, we are at a leaf. `tree[node] = nums[start]`.
 *    - Recursive Step: Calculate `mid`. Recursively build the Left Child `(2 * node)`
 *      and Right Child `(2 * node + 1)`.
 *    - After children return, `tree[node] = Left Sum + Right Sum`.
 * 3. `update(node, start, end, idx, val)`:
 *    - Base Case: If `start === end`, we found the exact leaf. Update its value.
 *    - Recursive Step: If `idx <= mid`, go Left. Else, go Right.
 *    - After returning, update the current node's sum based on its children.
 * 4. `sumRange(node, start, end, l, r)`:
 *    - Out of Bounds: If `r < start` or `l > end`, return 0.
 *    - Perfect Match: If `l <= start` and `end <= r`, return `tree[node]`.
 *    - Partial Match: Return the sum of recursively querying Left and Right children.
 *
 * Time Complexity:
 * - Constructor (Build): O(N)
 * - Update: O(log N)
 * - Query: O(log N)
 *
 * Space Complexity: O(N)
 * - The Segment Tree array requires O(4 * N) space, which simplifies to O(N).
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.n = nums.length;
  this.nums = nums;
  // Standard rule: A Segment Tree array needs to be 4 * N in size to be safe.
  this.tree = new Array(4 * this.n).fill(0);

  // Build the tree starting at Node #1, covering the full array range [0, n - 1]
  this.build(1, 0, this.n - 1);
};

NumArray.prototype.build = function (node, start, end) {
  if (start === end) {
    // Base Case: We hit a leaf! Give the Employee their starting value.
    this.tree[node] = this.nums[start];
  } else {
    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * node;
    const rightChild = 2 * node + 1;

    // Recursively build the left and right departments
    this.build(leftChild, start, mid);
    this.build(rightChild, mid + 1, end);

    // This Manager's total is the sum of their left and right departments
    this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  // Start the update from the CEO (Node #1)
  this.updateTree(1, 0, this.n - 1, index, val);
};

NumArray.prototype.updateTree = function (node, start, end, idx, val) {
  if (start === end) {
    // Base Case: We found the exact Employee! Update their value.
    this.nums[idx] = val;
    this.tree[node] = val;
  } else {
    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * node;
    const rightChild = 2 * node + 1;

    // Does this Employee live in the left department or right department?
    if (idx <= mid) {
      this.updateTree(leftChild, start, mid, idx, val);
    } else {
      this.updateTree(rightChild, mid + 1, end, idx, val);
    }

    // Update this Manager's total to reflect the new change!
    this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // Start the query from the CEO (Node #1)
  return this.queryTree(1, 0, this.n - 1, left, right);
};

NumArray.prototype.queryTree = function (node, start, end, l, r) {
  // Scenario 1: Completely Outside! (This department has nothing we want)
  if (r < start || l > end) {
    return 0;
  }

  // Scenario 2: Completely Inside! (This Manager perfectly covers what we want!)
  if (l <= start && end <= r) {
    return this.tree[node]; // We don't need to ask the employees, the math is already done!
  }

  // Scenario 3: Partially Inside (We have to split the query and ask the children)
  const mid = Math.floor((start + end) / 2);
  const leftChild = 2 * node;
  const rightChild = 2 * node + 1;

  const leftSum = this.queryTree(leftChild, start, mid, l, r);
  const rightSum = this.queryTree(rightChild, mid + 1, end, l, r);

  return leftSum + rightSum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
