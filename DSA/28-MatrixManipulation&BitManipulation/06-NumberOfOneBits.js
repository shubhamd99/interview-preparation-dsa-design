// https://leetcode.com/problems/number-of-1-bits/description/

// Given a positive integer n, write a function that returns the number of set bits in its
// binary representation (also known as the Hamming weight).

// "Hamming Weight" is just a fancy, intimidating academic term for a very simple concept!
// In binary code, the Hamming Weight of a number is simply the total number of 1 bits in that number. That's it!
// The binary number 0101 has two 1s. Its Hamming weight is 2.
// The binary number 0000 has zero 1s. Its Hamming weight is 0.
// The binary number 1111 has four 1s. Its Hamming weight is 4.

// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.

// Input: n = 128
// Output: 1
// Explanation:
// The input binary string 10000000 has a total of one set bit.

/**
 * Approach:
 * We need to calculate the Hamming Weight (number of '1' bits) of a positive integer.
 *
 * Idea:
 * While we could use `n & 1` and right-shift the bits one by one (`n >>> 1`),
 * an even faster and more elegant approach is Brian Kernighan's Algorithm.
 * The mathematical expression `n & (n - 1)` has the unique property of always
 * flipping the least-significant (right-most) `1` bit of a number to a `0`.
 * By placing this inside a `while (n !== 0)` loop, the loop will execute exactly
 * as many times as there are `1` bits in the number, entirely skipping over
 * any sequences of `0` bits. We simply increment a counter each time the loop runs.
 *
 * Steps:
 * 1. Initialize a `count` variable to 0.
 * 2. Loop `while (n !== 0)`:
 *    - The Magic Trick: Set `n = n & (n - 1)`. This instantly deletes the
 *      right-most '1' bit from `n`.
 *    - Increment our `count` by 1, because we successfully deleted a '1'!
 * 3. Once `n` is 0 (all '1's have been deleted), the loop breaks.
 * 4. Return the `count`.
 *
 * Time Complexity: O(1)
 * - The time complexity is technically bounded by the number of bits in the
 *   integer (32 bits for standard integers), making it O(1). More specifically,
 *   the loop runs exactly K times, where K is the number of '1' bits!
 *
 * Space Complexity: O(1)
 * - We only use a single `count` integer variable. No strings or arrays are created.
 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  // Keep destroying bits until the number is completely empty (0)
  while (n !== 0) {
    // --- BRIAN KERNIGHAN'S TRICK ---
    // Doing a Bitwise AND between 'n' and 'n - 1' guarantees that
    // the right-most '1' in 'n' is turned into a '0'.
    n = n & (n - 1);

    // We successfully wiped out a '1', so add it to our tally!
    count++;
  }

  return count;
};

// --- EXAMPLE TRACE: Number of 1 Bits ---

// Input: n = 11  (Binary: 1011)
// Count: 0

// =========================================================
// LOOP 1: n = 1011
// =========================================================
//   n       : 1 0 1 1   (Decimal 11)
//   n - 1   : 1 0 1 0   (Decimal 10)
// ------------------------- (Perform Bitwise AND)
//   Result  : 1 0 1 0   (Decimal 10)

// * The right-most '1' was instantly wiped out!
// * n is now 10. count is now 1.

// =========================================================
// LOOP 2: n = 1010
// =========================================================
//   n       : 1 0 1 0   (Decimal 10)
//   n - 1   : 1 0 0 1   (Decimal 9)
// ------------------------- (Perform Bitwise AND)
//   Result  : 1 0 0 0   (Decimal 8)

// * The right-most '1' was wiped out again!
// * n is now 8. count is now 2.

// =========================================================
// LOOP 3: n = 1000
// =========================================================
//   n       : 1 0 0 0   (Decimal 8)
//   n - 1   : 0 1 1 1   (Decimal 7)
// ------------------------- (Perform Bitwise AND)
//   Result  : 0 0 0 0   (Decimal 0)

// * The final '1' was wiped out!
// * n is now 0. count is now 3.

// =========================================================
// FINISHED!
// =========================================================
// The while loop (n !== 0) breaks because n is exactly 0.
// Final Count: 3
