// Arrays - DS

// An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of
// size N , each memory location has some unique index, i (where 0 < i < N ), that can be referenced as A[i] or Ai.
// Reverse an array of integers.

// Example A = [1,2,3]
// Return [3,2,1]

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the reverseArray function below.
function reverseArray(a) {
    // console.log("a", a);
    const result = [];

    for (let i = a.length - 1; i >= 0; i--) {
        result.push(a[i]);
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
