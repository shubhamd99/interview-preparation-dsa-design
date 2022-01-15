// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

// String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// 1. Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// 6. Return the integer as the final result.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

/**
 * @param {string} s
 * @return {number}
 */
// Time - O(n) | Space - O(n)
 var myAtoi = function(s) {
    let trimmed = s.trim()
    let parsed = parseInt(trimmed, 10)

    if (isNaN(parsed)) {
        return 0
    } else if (parsed >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1   
    } else if (parsed <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return parsed
    }
};


// Not Correct as per leetcode
/**
 * @param {string} s
 * @return {number}
*/
var myAtoi = function(s) {
    const removeStr = (string) => {
        let str = '';
        for (const char of string) {
            if (char === "-" || char === '+') {
                str += char;
            }
            if (!isNaN(char)) {
                str += char;
            }
        }
        return str;
    }
    const str = removeStr(s.trim());
    const strToNum = Number(str);

    if (strToNum >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1; 
    } else if (strToNum <= Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    } 

    return strToNum;
};

console.log(myAtoi('42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('987'));