// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
*/
var containsDuplicate = function(nums) {
    const map = {};
    for (const num of nums) {
        if (map[num]) return true;
        map[num] = true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true