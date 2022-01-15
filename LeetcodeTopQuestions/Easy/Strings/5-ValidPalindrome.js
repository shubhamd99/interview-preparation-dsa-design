// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
*/
// Two Pointer Approach
// Time - O(n) | Space - O(n)
var isPalindrome = function(s) {
    /**
     * @param {string} char
     * @return {string}
    */
    const isValidChar = (char) => {
        let regExp = /[^a-z0-9]/gi;
        return char.replace(regExp, "").toLowerCase();
    }

    let modStr = isValidChar(s);
    let pointerOne = 0;
    let pointerTwo = modStr.length - 1;

    while (pointerOne < pointerTwo) {
        if (modStr[pointerOne] !== modStr[pointerTwo]) {
            return false;
        }
        pointerOne++;
        pointerTwo--;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// Explanation: "amanaplanacanalpanama" is a palindrome.
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.