// Write a method to replace all spaces in a string with %20.
// You may assume that the string has sufficient at the end to hold the additional characters, and
// that you are given "true" length of the string

// Input "Mr John Smit          ", 13
// Output: "Mr%20John%20Smith"

// RegExp
// Time complexity: O(n)
// Space complexity: O(n) where n is the number of characters in the string. An additional factor could include the number of spaces in the string.
function URLify(string) {
  return string.trim().replace(/\s/g, "%20");
}

console.log(URLify("Mr John Smit          ")); // Mr%20John%20Smit

// The algorithm employs a two-scan approach. In the first scan, we count the number of spaces.
// We can compute how many extra characters we will have in the final string by tripling this number.
// In the second pass, which Is done in reverse order, we actually edit the string. When we see a space, we replace it with %20. If there is no space, then we copy the original character.

// Time complexity: O(N) where N is the length of the string.
// Auxiliary space: O(1).

function URLify2(str, trueLength) {
  str = str.split(""); // Convert it into array

  let spaceCount = 0;

  // Count Spaces
  for (let idx = 0; idx < trueLength; idx++) {
    if (str[idx] === " ") {
      spaceCount++;
    }
  }

  // Find new length of the modified string
  // New Length = True length + How Many Space Count we have * How many extra characters we want to insert on each space (2 and 0 = 2 character extra)
  let newLength = trueLength + spaceCount * 2; // 17
  str[newLength] = "\0"; // Denotes the string end - 17th place

  console.log("new length", newLength); // 17

  // Replace with %20
  // Will Start from end of the string
  for (let idx = trueLength - 1; idx >= 0; idx--) {
    if (str[idx] === " ") {
      str[newLength - 1] = "0";
      str[newLength - 2] = "2";
      str[newLength - 3] = "%";
      newLength -= 3;
    } else {
      // When there's no space will insert the same character to the string
      str[newLength - 1] = str[idx];
      newLength--;
    }
  }

  return str.join(""); // Join back into string
}

console.log(URLify2("Mr John Smith    ", 13)); // Mr%20John%20Smit
