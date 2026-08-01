// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/ - HARD

// Given an integer array nums, return an integer array counts where counts[i] is the
// number of smaller elements to the right of nums[i].

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

javascript;

/**
 * Approach:
 * We need to count the number of smaller elements to the right of each element
 * in an array in O(N log N) time.
 *
 * Idea:
 * We use a "Frequency" Segment Tree. Instead of the tree representing the indices
 * of the array, the leaves represent the range of possible *values* (acting as
 * frequency buckets). Because values can be negative, we apply a mathematical
 * offset of +10,000 so all values map to a positive bucket index between 0 and 20,000.
 * We iterate through the array backwards (from right to left). For each number,
 * we query the Segment Tree for the sum of all frequencies in the range `[0, val - 1]`.
 * This gives us exactly how many smaller numbers we have seen so far. After querying,
 * we update the Segment Tree by adding 1 to the frequency bucket of `val`.
 *
 * Steps:
 * 1. Define the OFFSET = 10000 and the MAX_VAL = 20000.
 * 2. Initialize a Segment Tree array of size `4 * MAX_VAL` filled with 0s.
 *    (We don't need a build function because the tree starts completely empty!).
 * 3. Initialize an `ans` array to store our counts.
 * 4. Loop `i` backwards from `nums.length - 1` down to 0:
 *    - Map the value to a positive bucket: `val = nums[i] + OFFSET`.
 *    - Query the tree for sum of range `[0, val - 1]`. Save this to `ans[i]`.
 *    - Update the tree by adding 1 to the leaf at index `val`.
 * 5. Return `ans`.
 *
 * Time Complexity: O(N log M)
 * - N is the number of elements in `nums`. M is the range of possible values (20,000).
 *   For each element, we do a Query O(log M) and an Update O(log M).
 *
 * Space Complexity: O(M)
 * - The Segment Tree requires O(4 * M) space, where M is 20,001. This is a
 *   constant ~80,000 elements, which easily fits in memory.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const OFFSET = 10000;
  const MAX_VAL = 20000;

  // We don't need a `build` function because all frequencies start at 0!
  const tree = new Array(4 * (MAX_VAL + 1)).fill(0);
  const ans = new Array(nums.length);

  // --- SEGMENT TREE HELPERS ---

  function update(node, start, end, idx) {
    if (start === end) {
      // We found the bucket for this value! Add a tally mark.
      tree[node] += 1;
    } else {
      const mid = Math.floor((start + end) / 2);
      const leftChild = 2 * node;
      const rightChild = 2 * node + 1;

      if (idx <= mid) {
        update(leftChild, start, mid, idx);
      } else {
        update(rightChild, mid + 1, end, idx);
      }

      // The Manager's total tally marks is the sum of their departments
      tree[node] = tree[leftChild] + tree[rightChild];
    }
  }

  function query(node, start, end, l, r) {
    if (r < start || l > end) {
      return 0; // Out of bounds
    }

    if (l <= start && end <= r) {
      return tree[node]; // Perfect match!
    }

    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * node;
    const rightChild = 2 * node + 1;

    return (
      query(leftChild, start, mid, l, r) + query(rightChild, mid + 1, end, l, r)
    );
  }

  // --- MAIN LOGIC ---

  // Read the array BACKWARDS
  for (let i = nums.length - 1; i >= 0; i--) {
    // Shift the number so it fits in our positive buckets
    const val = nums[i] + OFFSET;

    // 1. Query: "How many tally marks exist in buckets strictly smaller than me?"
    // We query from Bucket 0 up to Bucket (val - 1)
    if (val === 0) {
      // If val is 0, there are no smaller buckets!
      ans[i] = 0;
    } else {
      ans[i] = query(1, 0, MAX_VAL, 0, val - 1);
    }

    // 2. Update: "Add a tally mark into my bucket!"
    update(1, 0, MAX_VAL, val);
  }

  return ans;
};
