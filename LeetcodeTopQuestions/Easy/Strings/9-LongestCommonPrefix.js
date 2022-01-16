// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
*/
// Time - O(n^2) | Space - O(n)
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs === null || strs.length === 0) return prefix;

    for (let idx = 0; idx < strs[0].length; idx++) {
        const char = strs[0][idx];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][idx] !== char) {
                // loop through all other strings in the array
                if(strs[j][idx] !== char) return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // 'fl'
console.log(longestCommonPrefix(["dog","racecar","car"])); // ''