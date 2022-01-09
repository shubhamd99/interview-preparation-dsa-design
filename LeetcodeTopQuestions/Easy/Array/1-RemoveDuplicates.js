// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

// Do not allocate extra space for another array.
// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
*/
// Time - O(n) | Space - O(1)
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let idx = 0;
    for (let j = 1; j < nums.length; j++) {
        // I take the first element (let i = 0) of a sorted array and compare it to the next elements.
        // If the next element is a duplicate, it will be skipped.

        // If the next element is not a duplicate, I will copy its value to the element at the index i+1.
        if (nums[j] !== nums[idx]) {
            idx++;
            nums[idx] = nums[j];
        }
    }

    return idx + 1;
};

console.log(removeDuplicates([1,1,2])); // Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]