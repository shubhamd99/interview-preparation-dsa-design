// https://leetcode.com/problems/repeated-substring-pattern/description/

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of
// the substring together.

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

/**
 * Approach:
 * We need to determine if a string is composed entirely of a repeating substring.
 *
 * Idea (What is KMP?):
 * KMP (Knuth-Morris-Pratt) is an ultra-fast algorithm for finding a pattern inside
 * a string. Normally, if a match fails halfway through, you have to start all over.
 * KMP solves this by pre-calculating an LPS (Longest Prefix Suffix) "cheat sheet" array.
 * If a mismatch happens, KMP looks at the LPS array to see exactly how far it can
 * safely "skip forward" without missing anything, avoiding useless backtracking!
 *
 * Application to this problem:
 * We build the LPS array for the entire string `s`.
 * `lps[i]` stores the length of the longest proper prefix that is also a suffix
 * for the substring `s[0...i]`.
 * If the entire string has a repeating pattern, the very last value in the LPS
 * array will represent the total length of the string MINUS the length of a single
 * repeating block!
 * Therefore, `block_length = N - lps[N - 1]`.
 * If the string is genuinely a repeating pattern, then `N` must be cleanly
 * divisible by this `block_length`.
 *
 * Steps:
 * 1. Initialize an `lps` array of the same length as `s`, filled with 0s.
 * 2. Use two pointers to build the LPS array:
 *    - `len` (tracks the length of the current matching prefix) starts at 0.
 *    - `i` (tracks the current character we are testing) starts at 1.
 * 3. Loop `i` through the string:
 *    - If `s[i] === s[len]`, it's a match! Increment `len`, save it to `lps[i]`,
 *      and increment `i`.
 *    - If it's NOT a match:
 *        - If `len > 0`, we don't reset `len` to 0! We use the LPS cheat sheet
 *          to roll `len` backwards to `lps[len - 1]` and check again.
 *        - If `len === 0`, we are at rock bottom. `lps[i] = 0`, increment `i`.
 * 4. Grab the last value in the LPS array: `lpsLength = lps[N - 1]`.
 * 5. Return true IF `lpsLength > 0` AND `N % (N - lpsLength) === 0`.
 *
 * Time Complexity: O(N)
 * - We iterate through the string exactly once to build the LPS array. The `len`
 *   pointer can only move backwards as many times as it moved forwards, making
 *   it strictly linear.
 *
 * Space Complexity: O(N)
 * - For the `lps` array.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;

  // 1. Initialize the LPS cheat sheet
  const lps = new Array(n).fill(0);

  // 2. Build the LPS Array (The core of KMP!)
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1; // We always start checking at index 1

  while (i < n) {
    // CASE 1: The characters match!
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    }
    // CASE 2: The characters DO NOT match!
    else {
      if (len > 0) {
        // This is the KMP magic! Instead of starting all over at 0,
        // we look at our cheat sheet to see where we can safely fall back to!
        len = lps[len - 1];
      } else {
        // Rock bottom. No prefix matches this character.
        lps[i] = 0;
        i++;
      }
    }
  }

  // 3. Math check on the final value
  const lastLpsValue = lps[n - 1];

  // If lastLpsValue is > 0, it means the end of the string matches the beginning.
  // We check if the remaining "block" evenly divides the total length!
  if (lastLpsValue > 0 && n % (n - lastLpsValue) === 0) {
    return true;
  }

  return false;
};

/**
 * =========================================================
 * --- KMP CHEAT SHEET (LPS ARRAY) TRACE FOR "abab" ---
 * =========================================================
 * String: "abab" (Length N = 4, Indices: 0:a, 1:b, 2:a, 3:b)
 *
 * Setup:
 * lps = [0, 0, 0, 0]
 * len = 0 (Tracks the length of the currently matching prefix)
 * i = 1 (We always start checking at index 1)
 *
 * Step 1 (i = 1):
 * - Compare s[1] ('b') with s[len] (s[0] -> 'a').
 * - 'b' !== 'a'. No match.
 * - Since len === 0, we hit rock bottom. There is no matching prefix.
 * - Action: lps[1] = 0. Increment i to 2.
 * - Array state: [0, 0, 0, 0]
 *
 * Step 2 (i = 2):
 * - Compare s[2] ('a') with s[len] (s[0] -> 'a').
 * - 'a' === 'a'! MATCH!
 * - We found a matching prefix!
 * - Action: Increment len to 1. Set lps[2] = 1. Increment i to 3.
 * - Array state: [0, 0, 1, 0]
 *
 * Step 3 (i = 3):
 * - Compare s[3] ('b') with s[len] (s[1] -> 'b').
 * - 'b' === 'b'! MATCH!
 * - The prefix is still successfully matching the end of the string!
 * - Action: Increment len to 2. Set lps[3] = 2. Increment i to 4. (Loop ends!)
 * - Final Array state: [0, 0, 1, 2]
 *
 * The Final Math Check:
 * - lastLpsValue = lps[3] = 2. (This means the last 2 letters exactly match the first 2).
 * - Repeating Block Length = Total Length (4) - lastLpsValue (2) = 2.
 * - Is (4 % 2 === 0)? YES! The block evenly divides the string. Return true.
 * =========================================================
 */
