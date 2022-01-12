// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

// Reverse Inetger

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} n
 * @return {number}
*/
// Time - O(n) | Space - O(1)
var reverse = function(n) {
    let digit = 0;
    let result = 0;

    while (n){
        digit = n % 10;                  //  Get last digit. Ex. 123 -> 123/10 → 12.3 → 3
        result = (result * 10) + digit;  //  Ex. 123 → 1230 + 4 → 1234
        n = n / 10 | 0;                  //  Remove last digit. Ex. 123 → 12.3 → 12
    }

    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;
  
    return result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21