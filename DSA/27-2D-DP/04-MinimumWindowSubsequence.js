// https://leetcode.com/problems/minimum-window-subsequence/description/ - HARD

/**
 * Approach:
 * We need to find the minimum contiguous substring of `s1` that contains `s2`
 * as a subsequence.
 *
 * Idea:
 * We use 2D Dynamic Programming (Tabulation) with the Empty String Buffer trick.
 * Our matrix `dp` of size `(s1.length + 1) x (s2.length + 1)` will store the
 * STARTING INDEX in `s1` of a valid subsequence match.
 * If the characters match, we pull the starting index from the Diagonal
 * (`dp[r-1][c-1]`). If they mismatch, we carry down the starting index from
 * Above (`dp[r-1][c]`).
 * After processing a row, if we are in the final column of `s2` and the value
 * is not `-1`, it means we fully matched `s2`. We calculate the window length
 * `(r - startingIndex)` and keep track of the minimum length and best starting
 * position to slice the string at the end.
 *
 * Steps:
 * 1. Initialize a 2D `dp` array of size `[s1.length + 1][s2.length + 1]`.
 * 2. Base Cases:
 *    - Col 0: Fill with current row `r` (An empty `s2` starts matching at `r`).
 *    - Row 0: Fill with `-1` (An empty `s1` cannot match a non-empty `s2`).
 * 3. Trackers: `minLength = Infinity` and `bestStart = -1`.
 * 4. Loop `r` (rows for `s1`) from 1 to `s1.length`:
 *    - Loop `c` (cols for `s2`) from 1 to `s2.length`:
 *        - Match Rule: If `s1[r-1] === s2[c-1]`, pull the start index from Diagonal.
 *          `dp[r][c] = dp[r-1][c-1]`
 *        - Mismatch Rule: If no match, pull the start index from Above.
 *          `dp[r][c] = dp[r-1][c]`
 *    - Check the Final Column (`c === s2.length`):
 *        - If `dp[r][s2.length] !== -1`, we found a full match!
 *        - Calculate length: `r - dp[r][s2.length]`.
 *        - If length < `minLength`, update `minLength` and `bestStart`.
 * 5. If `bestStart` is `-1`, return `""`. Else, return the substring of `s1`
 *    from `bestStart` with length `minLength`.
 *
 * Time Complexity: O(S1 * S2)
 * - We iterate through the entire matrix exactly once.
 *
 * Space Complexity: O(S1 * S2)
 * - We create a 2D matrix of size (S1+1) x (S2+1).
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function (s1, s2) {
  const M = s1.length;
  const N = s2.length;

  // 1. Create the DP Table and fill it with -1 (representing "No Match")
  const dp = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(-1));

  // 2. Base Case: Col 0 (Target 's2' is empty)
  // An empty string trivially matches starting exactly at the current index.
  for (let r = 0; r <= M; r++) {
    dp[r][0] = r;
  }

  // (Row 0 is already filled with -1s, handling when 's1' is empty).

  let minLength = Infinity;
  let bestStart = -1;

  // 3. Loop through the grid
  for (let r = 1; r <= M; r++) {
    for (let c = 1; c <= N; c++) {
      const char1 = s1[r - 1];
      const char2 = s2[c - 1];

      if (char1 === char2) {
        // RULE 1 (MATCH!): Diagonal
        // We matched a letter! The sequence's starting index is whatever
        // the starting index was for the REST of the word.
        dp[r][c] = dp[r - 1][c - 1];
      } else {
        // RULE 2 (MISMATCH!): Above
        // Useless letter. Just carry down the starting index we had before.
        dp[r][c] = dp[r - 1][c];
      }
    }

    // --- CHECKING FOR A WINNER ---
    // Are we at the end of a row, AND did we successfully match the ENTIRE word s2?
    const startIdx = dp[r][N];

    if (startIdx !== -1) {
      // We found a valid window! Calculate its length.
      const currentLength = r - startIdx;

      // Is it the shortest window we've seen so far?
      if (currentLength < minLength) {
        minLength = currentLength;
        bestStart = startIdx;
      }
    }
  }

  // 4. Return the result!
  if (bestStart === -1) {
    return ""; // We never found a match
  } else {
    // substring(startIndex, endIndex exclusive)
    return s1.substring(bestStart, bestStart + minLength);
  }
};
