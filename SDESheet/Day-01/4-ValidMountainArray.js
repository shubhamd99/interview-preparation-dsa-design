// Problem Link - https://leetcode.com/problems/valid-mountain-array/
// Sol - 

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:
// 1) arr.length >= 3
// 2) There exists some i with 0 < i < arr.length - 1 such that:
//      a) arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//      b) arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const mountain1 = [2,1]; // false
const mountain2 = [3,5,5]; // false
const mountain3 = [0,3,2,1]; // true

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// Time Complexity - O(n)
// Space Complexity - O(1)
var validMountainArray = function(arr) {
    // If length of array is less than 3, then return false
    if (arr.length < 3) return false;
    // If the array never started increasing, then return false
    if (arr[1] < arr[0]) return false;

    let maxFound = false; // O(1)

    // run a for loop till arr.length - 2
    // (because we will try to access arr[i++] and we don't want to go beyond array length).
    for (let idx = 0; idx < arr.length - 1; idx++) {
        // If element is equal to next element, return false.
        if (arr[idx] === arr[idx + 1]) return false;

        // If max is found and still the next element is greater than current, then return false
        if (maxFound && arr[idx + 1] > arr[idx]) return false
        
        // If the next element is greater than current element, set maxFound to true
        if (arr[idx] > arr[idx + 1]) {
            maxFound = true;
        }
    }
    

    // Now that you are out of for loop, if max is not found,
    // that means array never started decreasing,
    // then return false, otherwise return true.

    return maxFound;
};

console.log(validMountainArray(mountain1));
console.log(validMountainArray(mountain2));
console.log(validMountainArray(mountain3));