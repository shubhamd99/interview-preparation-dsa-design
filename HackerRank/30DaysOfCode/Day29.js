// Day 29: Bitwise AND

// Given set S = {1,2,3,...,N}. Find two integers, A and B (where A < B), from set S such that the value of A & B is
// the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator.

// The first line contains an integer, T, the number of test cases. 
// Each of the T subsequent lines defines a test case as 2 space-separated integers, N and K, respectively.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function findMax(n, k) {
    var max = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {

            // The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
            let value = j & i;
            if (value < k && value > max) {
                max = value;
            }
        }
    }

    return max;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        console.log(findMax(n, k));
    }
}
