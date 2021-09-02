// Given a positive integer num, output its complement number.
// The complement strategy is to flip the bits of its binary representation.

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// To get 1's complement of a binary number, simply invert the given number.
// For example, 1's complement of binary number 110010 is 001101.


function findComplement(num) {
    let result = 0;
    // Convert number to binary string.
    let bits = num.toString(2);
    let complement = '';

    // Create opposite binary string for complement.
    for (let i = 0; i < bits.length; i++) {
        complement += bits[i] === '0' ? '1' : '0';
    }
    // Convert binary string back into a number.
    result = parseInt(complement, 2);
    return result;
};

module.exports = findComplement;