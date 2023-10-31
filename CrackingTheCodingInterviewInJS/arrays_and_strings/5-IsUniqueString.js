// Implement an algorithm to determine if a string has all unique characters
// Time Complexity: O(1)
// Auxiliary Space: O(n)
function isUnique(str) {
  const hash = {};

  for (const char of str) {
    if (char in hash) {
      return false;
    } else {
      hash[char] = true;
    }
  }

  return true;
}

console.log(isUnique("Shubham")); // Two 'h' -> false
console.log(isUnique("Covid")); // true
console.log(isUnique("abcd10jk")); // true

// Brute Force technique: Run 2 loops with variable i and j. Compare str[i] and str[j]. If they become equal at any point, return false.
// Time Complexity: O(n2)
// Auxiliary Space: O(1)
function uniqueCharacters(str) {
  // If at any time we encounter 2
  // same characters, return false
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }

  // If no duplicate characters
  // encountered, return true
  return true;
}

console.log(uniqueCharacters("abcd10jk")); // true
console.log(uniqueCharacters("hutg9mnd!nk9")); // false

// Using Set Data Structure
// Time Complexity: O(nlogn)
// Auxiliary Space: O(n)
function uniqueCharacters2(str) {
  // Converting string to set
  const setstring = new Set(str);

  // If length of set is equal to len of string
  // then it will have unique characters
  if (setstring.size == str.length) {
    return true;
  } else {
    return false;
  }
}

console.log(uniqueCharacters2("abcd10jk")); // true
console.log(uniqueCharacters2("hutg9mnd!nk9")); // false
