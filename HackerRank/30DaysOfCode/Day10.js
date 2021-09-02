// Day 10: Binary Numbers

// Given a base-10 integer, n, convert it to binary (base-).
// Then find and print the base- integer denoting the maximum number of consecutive 1's in n's binary representation.

// The binary representation of 5 is 101, so the maximum number of consecutive 1's is 1.
// The binary representation of 13 is 1101, so the maximum number of consecutive 1's is 2.

function main() {
    const n = parseInt(readLine(), 10);
    // Number to Binary
    const binary = (n >>> 0).toString(2);
    // Binary Number to Array
    const binaryIntoArray = binary.split("");

    let count = [];
    let prevValue = null;

    for (const [index, bin] of binaryIntoArray.entries()) {
    
        if (bin === '1' && (!prevValue || prevValue !== '1')) {
            count.push([bin]);
        } else if (bin === '1' && prevValue === '1') {
            const lastVal = count[count.length-1];
            lastVal.push(bin)
        }

        prevValue = bin;
    }

    let maxlength = 0;

    for (let arr of count) {
        if (maxlength < arr.length) {
            maxlength = arr.length;
        }
    }
    console.log(maxlength);
}