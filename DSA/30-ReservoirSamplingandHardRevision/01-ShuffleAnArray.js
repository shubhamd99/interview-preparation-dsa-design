// https://leetcode.com/problems/shuffle-an-array/description/

// Given an integer array nums, design an algorithm to randomly shuffle the array.
// All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:
// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Fisher-Yates Shuffle Algorithm - It is an algorithm to randomly shuffle an array in place.
// Walk from the last element to the first. At each position i, pick a random index j between 0 and i inclusive, then swap nums[i] with nums[j].

/**
 * Approach:
 * We need to implement a class that can reset an array to its original state
 * and randomly shuffle it in-place such that all permutations are equally likely.
 *
 * Idea:
 * - Constructor: We store the original array. Because objects/arrays are passed
 *   by reference in JS, we must make a shallow copy (`[...nums]`) to ensure our
 *   original state isn't accidentally modified during shuffling.
 * - Reset: We simply return our cleanly saved original copy.
 * - Shuffle: We use the Fisher-Yates (Knuth) Shuffle algorithm. We iterate
 *   through the array backwards. At each step `i`, we generate a random index `j`
 *   between `0` and `i` (inclusive). We then swap the elements at `i` and `j`.
 *   This ensures an O(N) perfectly uniform random shuffle.
 *
 * Steps:
 * 1. Constructor:
 *    - `this.original = [...nums]` (Save a pristine copy)
 *    - `this.array = [...nums]` (Create a working copy to manipulate)
 * 2. Reset:
 *    - Overwrite our working copy with the pristine copy: `this.array = [...this.original]`
 *    - Return `this.original`.
 * 3. Shuffle:
 *    - Loop `i` from the end of `this.array` down to `1`:
 *        - Generate a random index `j` from `0` to `i`.
 *          (Formula: `Math.floor(Math.random() * (i + 1))`)
 *        - Swap `this.array[i]` and `this.array[j]`.
 *    - Return `this.array`.
 *
 * Time Complexity:
 * - Constructor: O(N) to copy the array.
 * - Reset: O(N) to copy the array.
 * - Shuffle: O(N) to iterate and swap elements.
 *
 * Space Complexity: O(N)
 * - We store two extra copies of the array (original and working copy).
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  // We MUST use the spread operator [...] to create an actual physical copy!
  // If we just did `this.original = nums`, it would just be a reference pointer.
  this.original = [...nums];
  this.array = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  // Reset our working array back to the pristine state
  this.array = [...this.original];
  return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // --- FISHER-YATES SHUFFLE ---
  // Start at the end of the array and work backwards
  for (let i = this.array.length - 1; i >= 0; i--) {
    // Generate a random integer between 0 and i (inclusive)
    // Math.random() generates a decimal between 0.0 and 0.999...
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at index i and j!
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  return this.array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
