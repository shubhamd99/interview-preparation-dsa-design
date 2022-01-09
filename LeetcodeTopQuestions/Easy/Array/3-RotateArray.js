// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

// Given an array, rotate the array to the right by k steps, where k is non-negative

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
*/
// Brute Force
var rotate = function(nums, k) {
    for (let idx = 0; idx < k; idx++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

// Reversal Method
var rotate = function(nums, k) {
    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        // uses ES6 syntax to swap the array[start] and array[end] elements before incrementing and decrementing the pointers
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    // If array length is same as k then k will become zero
    // Ex - 3 % 3 = 0
    k %= nums.length;
  

    // We know we need to call this function three times:

    // Once to reverse the entire array.
    // Once to reverse from nums[0] to k.
    // Once to reverse from k to the end.

    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));
  
    return nums;
};

// nums = [1, 2, 3, 4, 5]

// k = 2
// => [4, 5, 1, 2, 3]

// // original array reversed
// [5, 4, 3, 2, 1]

// // reverse just the first (k) elements
// [4, 5, 3, 2, 1]

// // see where we're going?

// // reverse from (k) to the end
// [4, 5, 1, 2, 3]

console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]