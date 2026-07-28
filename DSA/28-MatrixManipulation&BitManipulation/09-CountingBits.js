// https://leetcode.com/problems/counting-bits/description/

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

/**
 * Approach:
 * We need to return an array containing the number of '1' bits for every integer
 * from 0 to n.
 *
 * Idea:
 * This problem combines Dynamic Programming and Bit Manipulation. Instead of
 * counting the bits for every number from scratch, we build on previously computed
 * results. If you take any number `i` and right-shift it by 1 (`i >> 1`), you
 * are effectively dividing it by 2 and dropping its least significant bit.
 * Therefore, the number of 1s in `i` is exactly equal to the number of 1s in
 * `i >> 1`, plus the value of `i`'s last bit (`i & 1`). Because we calculate
 * the array sequentially, `ans[i >> 1]` is guaranteed to already be computed!
 *
 * Steps:
 * 1. Initialize our DP array `ans` of length `n + 1`, filled with 0s.
 * 2. Base Case: `ans[0] = 0` (The number 0 has zero 1s).
 * 3. Loop `i` from 1 up to `n`:
 *    - Lookup the previously calculated bits for the shifted number: `ans[i >> 1]`
 *    - Find the final bit of the current number: `(i & 1)`
 *    - Add them together: `ans[i] = ans[i >> 1] + (i & 1)`
 * 4. Return the `ans` array.
 *
 * Time Complexity: O(N)
 * - We iterate from 1 to n exactly once, performing O(1) bitwise operations
 *   at each step.
 *
 * Space Complexity: O(N)
 * - We create an array of size `n + 1` to store our Dynamic Programming answers
 *   and return it.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  // 1. Create our DP table to hold the answers for 0 through n
  const ans = new Array(n + 1).fill(0);

  // 2. Base Case
  ans[0] = 0;

  // 3. Loop through every number
  for (let i = 0; i <= n; i++) {
    // --- THE MAGIC DP FORMULA ---
    // ans[i >> 1] looks up the bits for the right-shifted version of i.
    // (i & 1) checks if the last bit of i is a 1 or a 0.
    ans[i] = ans[i >> 1] + (i & 1);
  }

  // 4. Return the fully built array
  return ans;
};

// --- EXAMPLE TRACE: Counting Bits ---

// Input: n = 2
// Array Size: n + 1 = 3

// Initial DP Array:
// ans = [0, 0, 0]

// =========================================================
// BASE CASE: i = 0 (Binary: 0)
// =========================================================
// ans[0] = 0
// * The number 0 naturally has zero '1' bits.
// * Array State: [0, 0, 0]

// =========================================================
// LOOP: i = 1 (Binary: 1)
// =========================================================
// DP Formula: ans[i] = ans[i >> 1] + (i & 1)

// 1. Shift Right (i >> 1)
//    1 >> 1 is 0.
//    We look up ans[0]. The saved answer is 0!

// 2. Check Last Bit (i & 1)
//    1 & 1 is 1. (The number 1 ends in a 1).

// 3. Calculate
//    ans[1] = 0 + 1 = 1.

// * Array State: [0, 1, 0]

// =========================================================
// LOOP: i = 2 (Binary: 10)
// =========================================================
// DP Formula: ans[i] = ans[i >> 1] + (i & 1)

// 1. Shift Right (i >> 1)
//    2 >> 1 is 1. (Because shifting '10' right deletes the zero, leaving '1').
//    We look up ans[1]. The saved answer is 1!

// 2. Check Last Bit (i & 1)
//    2 & 1 is 0. (The number 2 is even, so it ends in a 0).

// 3. Calculate
//    ans[2] = 1 + 0 = 1.

// * Array State: [0, 1, 1]

// =========================================================
// FINISHED!
// =========================================================
// The loop ends because i reached n (2).
// Final Result: [0, 1, 1]
