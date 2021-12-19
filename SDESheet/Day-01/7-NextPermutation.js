// Problem Link - https://leetcode.com/problems/next-permutation/
// Sol - 

// Lexicographically next permutation

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
// The replacement must be in place and use only constant extra memory.

// Input: nums = [1,2,3]
// Output: [1,3,2]

// Input: nums = [3,2,1]
// Output: [1,2,3]

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Input: nums = [1]
// Output: [1]

// What is Next Permutation?
// Permutations of 1 2 3 are:
// 1 2 3
// 1 3 2 (Next Permutation)
// 2 1 3
// 2 3 1
// 3 2 1
// ....

// Idea:
// Changes made to the left part of an array have more impact on the lexicographical sorting than changes made to the right side,
// so logically, in order to find the next permutation that is lexicographically greater,
// we need to find the farthest right-most number that can be swapped for a larger number.
// Also, the larger number must come from the target number's right,
// otherwise you'd create a permutation that is lexicographically lower.

// We also then need to make sure that it's not just any larger number,
// but the next possible larger number from the numbers to its right. Then,
// we'll need to make sure that the remaining numbers to the right of our swapped target are in their lexicographically smallest configuration.
// (Think of it like a counter rolling over from 0999 into 1000.)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
// TC - O(n)
// SC - O(1)
var nextPermutation = function(nums) {
    const swap = (i, j) => [nums[i],nums[j]] = [nums[j],nums[i]]

    // nums = [1,2,3,4,5,6,7]
    let len = nums.length - 1; // 0-6 -> 6 last Index

    let i = len - 1; // 5 - second last index

    // So the first order of business is to find the target number we want to swap.
    // As we check from the right to the left, if each number is larger than the one before,
    // then we clearly can't find a lexicographically larger number.
    // Therefore, we have to move left until we find the first time a number is lower than the number to its right.
    // 6 >= 7 -> false
    while(nums[i] >= nums[i + 1]) i--;

    let j = i + 1; // 6
    let k = len; // 6

    // Once we find that target (N[i]),
    // the very important thing to recognize is that the numbers to the target's right are already in sorted order,
    // just in the reverse order, so we can easily reverse them.

    // It's easy then to move from the smallest to largest of the reversed numbers,
    // and look for the first number (N[j]) that's larger than our target so that,
    // we can swap the two. Since N[j] is lexicographically nearest to N[i],
    // the subarray to the right of N[i] will still be in the correct order even after the swap.
    // (Even if we don't actually find the target, we still want to reverse the entire array, per the instructions.)

    // 6 < 6 -> false
    while (j < k) {
        swap(j++,k--)
    };

    // 5 >= 0  -> true
    if (i >= 0) {
        for (j = i + 1; nums[i] >= nums[j];) j++
        swap(i,j)
    }

    return nums;
};

console.log(nextPermutation([1,2,3])); // [ 1, 3, 2 ]
console.log(nextPermutation([3,2,1])); // [ 1, 2, 3 ]
console.log(nextPermutation([1,1,5])); // [ 1, 5, 1 ]
console.log(nextPermutation([1,3,2])); // [ 3, 2, 1 ]
console.log(nextPermutation([1,2,3,4,5,6,7])); // [ 1,2,3,4,5,7,6 ]
console.log(nextPermutation([1])); // [ 1 ]