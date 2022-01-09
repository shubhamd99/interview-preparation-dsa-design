// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/
// Time - O(n) | Space - O(n)
var intersect = function(nums1, nums2) {
    const map = {};
    const intersection = [];

    for (const num of nums1) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    for (const num of nums2) {
        if (map[num]) {
            intersection.push(num);
            map[num] > 1 ? map[num]-- : delete map[num];
        }
    }
    return intersection;
};

console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]