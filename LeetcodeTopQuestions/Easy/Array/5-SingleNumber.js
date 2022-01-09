// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
*/
// Time - O(n) | Space - O(n)
var singleNumber = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return nums[0];

    const map = {};

    for (const num of nums) {
        if (map[num]) { // O(1) read write in object
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    for (const value in map) {
        if (map[value] === 1) {
            return value;
        }
    }
};

function singleNumber2(nums) {
    let hash = {};
    nums.forEach((num) => {
      if (hash[num]) {
        delete hash[num];
      }
      else {
        hash[num] = 1;
      }
    });
    return Object.keys(hash)[0];
};

console.log(singleNumber([2,2,1])); // 1
console.log(singleNumber([4,1,2,1,2])); // 4
console.log(singleNumber([1])); // 1