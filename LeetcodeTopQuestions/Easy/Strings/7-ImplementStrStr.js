// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
*/
// Time - O(m * n)
var strStr = function(haystack, needle) {
    if (needle === '') return 0;

    for (let idx = 0; idx < (haystack.length + 1 - needle.length); idx++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[idx + j] !== needle[j]) {
                break;
            }
            if (j === needle.length - 1) {
                return idx;
            }
        }
    }

    return -1;
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
console.log(strStr('', '')); // 0