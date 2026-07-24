// https://leetcode.com/problems/edit-distance/description/

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * Approach:
 * We need to find the minimum number of operations (Insert, Delete, Replace)
 * to convert `word1` into `word2`.
 *
 * Idea:
 * We use 2D Dynamic Programming (Tabulation) with the Empty String Buffer trick.
 * Our matrix `dp` of size `(word1.length + 1) x (word2.length + 1)` stores the
 * minimum operations needed to convert substrings.
 * If the target string is empty, we must delete all characters (dp[r][0] = r).
 * If the source string is empty, we must insert all characters (dp[0][c] = c).
 * If the current characters match, we do 0 operations and take the Diagonal value.
 * If they mismatch, we perform 1 operation and take the Minimum of inserting (Left),
 * deleting (Above), or replacing (Diagonal).
 *
 * Steps:
 * 1. Initialize a 2D `dp` array of size `[word1.length + 1][word2.length + 1]`.
 * 2. Base Cases:
 *    - Col 0: Fill with current row `r` (Represents Deletions).
 *    - Row 0: Fill with current col `c` (Represents Insertions).
 * 3. Loop `r` (rows for `word1`) from 1 to `word1.length`:
 *    - Loop `c` (cols for `word2`) from 1 to `word2.length`:
 *        - Match Rule: If `word1[r-1] === word2[c-1]`, pull from Diagonal.
 *          `dp[r][c] = dp[r - 1][c - 1]`
 *        - Mismatch Rule: If no match, take Min of Left, Above, Diagonal + 1.
 *          `dp[r][c] = 1 + Math.min(dp[r][c-1], dp[r-1][c], dp[r-1][c-1])`
 * 4. Return the bottom-right cell: `dp[word1.length][word2.length]`.
 *
 * Time Complexity: O(W1 * W2)
 * - We iterate through the entire matrix exactly once.
 *
 * Space Complexity: O(W1 * W2)
 * - We create a 2D matrix of size (W1+1) x (W2+1).
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const M = word1.length;
  const N = word2.length;

  // 1. Create the DP Table filled with 0s
  const dp = new Array(M + 1).fill(0).map(() => new Array(N + 1).fill(0));

  // 2. Base Cases (The Buffer)
  // Turning "abc" into "" requires 3 Deletions
  for (let r = 0; r <= M; r++) {
    dp[r][0] = r;
  }

  // Turning "" into "xyz" requires 3 Insertions
  for (let c = 0; c <= N; c++) {
    dp[0][c] = c;
  }

  // 3. Loop through the grid
  for (let r = 1; r <= M; r++) {
    for (let c = 1; c <= N; c++) {
      const char1 = word1[r - 1];
      const char2 = word2[c - 1];

      if (char1 === char2) {
        // RULE 1 (MATCH!): Diagonal
        // Free pass! No operations needed.
        dp[r][c] = dp[r - 1][c - 1];
      } else {
        // RULE 2 (MISMATCH!): 1 + Min(Left, Above, Diagonal)
        // We must do 1 operation. Which one was the cheapest?
        const insertOp = dp[r][c - 1]; // Left
        const deleteOp = dp[r - 1][c]; // Above
        const replaceOp = dp[r - 1][c - 1]; // Diagonal

        dp[r][c] = 1 + Math.min(insertOp, deleteOp, replaceOp);
      }
    }
  }

  // 4. Return the bottom-right corner!
  return dp[M][N];
};

// --- EXAMPLE TRACE: Edit Distance ---

// Input: word1 = "horse" (Rows), word2 = "ros" (Cols)
// Grid Size: 6 Rows x 4 Cols (Using the +1 Buffer Trick)

// Initial Grid:
// Row 0 (""): [0, 1, 2, 3]  <-- Base Cases! Turning "" into "r", "ro", "ros" takes 1,2,3 Insertions.
// Col 0 (""): [0, 1, 2, 3, 4, 5] <-- Turning "h","ho","hor", etc. into "" takes Deletions.

// ---------------------------------------------------------
// Row 1: char1 = 'h'
// ---------------------------------------------------------
// - Col 1 ('r'): Mismatch.
//   1 + Min(Left:1, Above:1, Diagonal:0) = 1 + 0 = 1!
// - Col 2 ('o'): Mismatch.
//   1 + Min(Left:2, Above:2, Diagonal:1) = 1 + 1 = 2!
// - Col 3 ('s'): Mismatch.
//   1 + Min(Left:3, Above:3, Diagonal:2) = 1 + 2 = 3!
// * Row 1 State: [1, 1, 2, 3]

// ---------------------------------------------------------
// Row 2: char1 = 'o'
// ---------------------------------------------------------
// - Col 1 ('r'): Mismatch. 1 + Min(2, 1, 1) = 2.
// - Col 2 ('o'): MATCH!
//   Free Pass! Diagonal = dp[1][1] = 1!
// - Col 3 ('s'): Mismatch. 1 + Min(3, 3, 2) = 1 + 2 = 3!
// * Row 2 State: [2, 2, 1, 2]

// ---------------------------------------------------------
// Row 3: char1 = 'r'
// ---------------------------------------------------------
// - Col 1 ('r'): MATCH!
//   Free Pass! Diagonal = dp[2][0] = 2!
// - Col 2 ('o'): Mismatch.
//   1 + Min(Left:1, Above:1, Diagonal:2) = 1 + 1 = 2!
// - Col 3 ('s'): Mismatch.
//   1 + Min(Left:2, Above:2, Diagonal:1) = 1 + 1 = 2!
// * Row 3 State: [3, 2, 2, 2]

// ---------------------------------------------------------
// Row 4: char1 = 's'
// ---------------------------------------------------------
// - Col 1 ('r'): Mismatch. 1 + Min(4, 2, 3) = 3.
// - Col 2 ('o'): Mismatch. 1 + Min(3, 2, 2) = 3.
// - Col 3 ('s'): MATCH!
//   Free Pass! Diagonal = dp[3][2] = 2!
// * Row 4 State: [4, 3, 3, 2]

// ---------------------------------------------------------
// Row 5: char1 = 'e'  <-- THE FINAL ROW
// ---------------------------------------------------------
// - Col 1 ('r'): Mismatch. 1 + Min(5, 3, 4) = 4.
// - Col 2 ('o'): Mismatch. 1 + Min(4, 3, 3) = 4.
// - Col 3 ('s'): Mismatch.
//   1 + Min(Left:4, Above:2, Diagonal:3) = 1 + 2 = 3!
// * Row 5 State: [5, 4, 4, 3]
// ---------------------------------------------------------

// The loop finishes!
// We check the bottom-right corner: dp[5][3].
// Result: 3.
