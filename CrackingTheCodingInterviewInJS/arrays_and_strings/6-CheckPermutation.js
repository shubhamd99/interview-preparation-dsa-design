// Given two strings, write a method to decide if one is a permutation of the other

// Permutation relates to the act of arranging all the members of a set into some sequence or order,
// or if the set is already ordered, rearranging (reordering) its elements.

// For example: a set of {1,2,3} will have a 6 different permutations such as (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).

// Therefore, a string is a permutation of another string if it fulfills the following conditions:

// Both have to have the same characters.
// Both have to have same length.
// Empty string isn’t count.

// Sorting and compare
function sort(str) {
  return str.split("").sort().toString(); // You can implement here different method of sorting, like writing your own mergeSort, quickSort algorithm, etc… .
}

// Time complexity - Sorting will take about O(nlogn) if it is implemented in MergeSort, and O(n) in average case if it is implemented in QuickSort. Here I will assume it’s O(nlogn).
// Converting to array and back will take O(n) each.
// In total: O(nlogn) + O(n) + O(n) → O(nlogn) running time
// Space - O(n)
function isPermutation(strA, strB) {
  let isValid = true;

  // First validity check
  if (!strA || !strB || strA.length !== strB.length) {
    return !isValid;
  }

  let sortedA = sort(strA);
  let sortedB = sort(strB);

  return sortedA === sortedB;
}

console.log(isPermutation("DOGE", "DOGY")); // false
console.log(isPermutation("DOGO", "GOOD")); // true
console.log(isPermutation("gdoo", "dGoo")); // false // case sensitive

// Keep mapping object of characters and their occurrences
function getMap(str) {
  let map = {};

  for (const char of str) {
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  return map;
}

// We have 2 main loops here, each takes O(n) running time with n is the length of both strA and strB.
// So in total: O(n)+O(n) → O(n) linear running time.
// However, we do need help of extra mapping object, which can cost us up to O(n) space in case there is no duplicate in input strings.
function isPermutation2(strA, strB) {
  let isValid = true;

  // First validity check
  if (!strA || !strB || strA.length !== strB.length) {
    return !isValid;
  }

  // Get the map of characters and their occurences in strA
  const charsMap = getMap(strA);

  // Check strB characters and occurences on the computed map.
  for (const charB of strB) {
    if (charsMap[charB] !== undefined && charsMap[charB] >= 1) {
      charsMap[charB]--; // If current character does appear in A and B, decrement the occurence counter.
    } else {
      return !isValid;
    }
  }

  return isValid;
}

console.log(isPermutation2("DOGE", "DOGY")); // false
console.log(isPermutation2("DOGO", "GOOD")); // true
console.log(isPermutation2("gdoo", "dGoo")); // false // case sensitive
