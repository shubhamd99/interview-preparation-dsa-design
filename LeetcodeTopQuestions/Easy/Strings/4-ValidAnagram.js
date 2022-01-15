// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const createCharMap = (str) => {
        const map = {};
        for (const char of str) {
            map[char] ? map[char]++ : map[char] = 1;
        }
        return map;
    }

    const charMap = createCharMap(s);
    const charMap2 = createCharMap(t);

    if (Object.keys(charMap).length !== Object.keys(charMap2).length) {
        return false;
    }

    for (const char in charMap) {
        if (charMap[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aacc', 'ccac')); // false