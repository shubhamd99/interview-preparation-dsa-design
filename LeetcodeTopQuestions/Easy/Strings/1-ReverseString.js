// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

// Reverse String


// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
*/
// Time - O(n) | Space - O(1)
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
     
    return s;
};

console.log(reverseString(["h","e","l","l","o"])); // Output: ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // Output: ["h","a","n","n","a","H"]