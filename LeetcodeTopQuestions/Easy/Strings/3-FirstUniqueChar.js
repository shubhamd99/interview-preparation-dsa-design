// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
*/
// Time - O(n) | Space - O(1)
// Constant space because english letters are only 26
var firstUniqChar = function(s) {
    const charMap = {};

    for (const char of s) {
        charMap[char] ? charMap[char]++ : charMap[char] = 1;
    }

    for (let idx = 0; idx < s.length; idx++) {
        if (charMap[s[idx]] === 1) {
            return idx;
        }
    }

    return -1;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // -1