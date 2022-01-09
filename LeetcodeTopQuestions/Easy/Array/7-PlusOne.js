// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.


// ALGO:

// - start from the last index of the array and process each digit till the first index.

// - if the current digit is smaller than 9, add one to the current digit,
// and return the array else assign zero to the current digit.

// - if the first element is 9, then it means all the digits are 9.
//   - increase the array size by 1, and set the first digit as 1.

// - return array


/**
 * @param {number[]} digits
 * @return {number[]}
*/
// Time - O(n)
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if( digits[i] > 9 ){
            digits[i] = 0;
        } else{
            return digits;
        }
    }

    // The unshift() method adds one or more elements to the beginning of an array
    // and returns the new length of the array.
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1,2,3]));
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]

console.log(plusOne([4,3,2,1]));
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

console.log(plusOne([9]));
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].