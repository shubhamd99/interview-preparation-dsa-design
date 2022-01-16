// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

// Count And Say

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// 1. countAndSay(1) = "1"
// 2. countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1),
      // which is then converted into a different digit string.

// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
// Then for each group, say the number of characters, then say the character.
// To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Constraints:

// 1 <= n <= 30

/**
 * @param {number} n
 * @return {string}
*/
var countAndSay = function(n, str = '1') {
    if (n === 1) {
        return str;
    }

    let newStr = '';
    let count = 0;
    let say = str[0];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === say) {
          count += 1;
        } else {
          newStr += count + say;
          count = 1;
          say = str[i];
        }
    }

    return countAndSay(n - 1, newStr + count + say);
};

console.log(countAndSay(1)); // '1'
// Explanation: This is the base case.
console.log(countAndSay(4)); // '1211'
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"



// Sequence
// 1
// 11
// 21
// 1211
// 111221
// so on...