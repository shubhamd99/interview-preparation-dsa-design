// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function(nums) {
    // declare variable nonZeroIndex to keep track of where (index),
    // I am going to place the variable if it is not 0.
    let nonZeroIndex = 0;

    for (let idx = 0; idx < nums.length; idx++) {
        // As we keep finding new non-0 elements,
        // we just overwrite them at the "nonZeroIndex + 1" 'th index
        if (nums[idx] !== 0) {
            nums[nonZeroIndex] = nums[idx];
            nonZeroIndex++;
        }
    }

    // we see that all of the non-zero elements have been moved to the beginning of the array
    // in their original order. We now need to move all of the 0's to the end.
    for (let idx = nonZeroIndex; idx < nums.length; idx ++) {
        nums[idx] = 0;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]