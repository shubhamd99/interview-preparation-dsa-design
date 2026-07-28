// https://leetcode.com/problems/sum-of-two-integers/description/

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Input: a = 1, b = 2
// Output: 3

/**
 * Approach:
 * We need to add two integers without using the `+` or `-` operators.
 *
 * Idea:
 * We simulate hardware addition using Bit Manipulation.
 * The Bitwise XOR operator (`^`) performs addition but ignores carries.
 * The Bitwise AND operator (`&`) finds where the carries occur (where both bits
 * are 1). The Left Shift operator (`<<`) physically moves those carries to the
 * next column to the left.
 * We continuously update our numbers (setting `a` to the XOR addition, and `b`
 * to the shifted carries) and repeat the process in a `while` loop. Once `b`
 * (the carries) becomes 0, it means all carries have been fully resolved, and
 * `a` holds the final sum.
 *
 * Steps:
 * 1. Loop `while (b !== 0)`:
 *    - Calculate the shifted carries: `let carries = (a & b) << 1;`
 *    - Calculate the addition without carries: `a = a ^ b;`
 *    - Update `b` to be the carries: `b = carries;`
 * 2. Return `a`.
 *
 * Time Complexity: O(1)
 * - The time complexity is technically bounded by the number of bits in the
 *   integer (32 bits), making it O(1).
 *
 * Space Complexity: O(1)
 * - We only use variables in-place.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // Keep looping until there are absolutely no carries left to process!
  while (b !== 0) {
    // 1. Find the Carries!
    // AND (&) finds exactly where 1 + 1 happens.
    // Left Shift (<< 1) carries that 1 over to the next column on the left!
    let carries = (a & b) << 1;

    // 2. Do the Addition!
    // XOR (^) perfectly adds bits together, but throws away the carries.
    // We save this "partial addition" inside 'a'.
    a = a ^ b;

    // 3. Set 'b' to our carries.
    // Now, the next loop will attempt to "add" our partial addition (a)
    // together with the carries (b)!
    b = carries;
  }

  // When b (the carries) hits 0, 'a' holds the final answer!
  return a;
};

// --- EXAMPLE TRACE: Sum of Two Integers ---

// Input: a = 1 (0001), b = 2 (0010)

// =========================================================
// LOOP 1
// =========================================================
// 1. Calculate Carries: (a & b) << 1
//    a       : 0 0 0 1
//    b       : 0 0 1 0
//   ------------------- (Bitwise AND)
//    Result  : 0 0 0 0
//    Shift<<1: 0 0 0 0
//    * carries = 0

// 2. Perform Addition: a ^ b
//    a       : 0 0 0 1
//    b       : 0 0 1 0
//   ------------------- (Bitwise XOR)
//    Result  : 0 0 1 1  (Decimal 3!)
//    * a = 3

// 3. Update Variables:
//    * b = carries (0)

// =========================================================
// FINISHED!
// =========================================================
// The while loop (b !== 0) breaks because b is exactly 0.
// Final Answer (a): 3
