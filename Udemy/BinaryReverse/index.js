// For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111.
// Your program should reverse this binary string which then becomes: 11110100
// and then finally return the decimal version of this string, which is 244.

// "47" --> 00101111 --> 11110100 --> 244
function binaryReverse(str) {
    // Converting it to binary number
    let binaryForm = Number(str).toString(2);

    // Number of leading zeros in binary representation of a given number upto 8 digit
    while(binaryForm.length < 8) {
        binaryForm = "0" + binaryForm;
    }

    // Reversing the binary string
    let reversedBinaryFrom = binaryForm.split('').reverse().join('');

    // Converting it to decimal again
    return parseInt(reversedBinaryFrom, 2);
}

module.exports = binaryReverse;