// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
var twoSum = function(nums, target) {
    const numMap = {};

    for (const [index, num] of nums.entries()) {
        const match = target - num;
        if (match in numMap) {
            return [numMap[match], index];
        } else {
            numMap[num] = index;
        }
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9));
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]