// Day 28: RegEx, Patterns, and Intro to Databases

// Consider a database table, Emails, which has the attributes First Name and Email ID. Given N rows of data simulating the Emails table,
// print an alphabetically-ordered list of people whose email address ends in @gmail.com.

// The first line contains an integer, N, total number of rows in the table. 
// Each of the N subsequent lines contains 2 space-separated strings denoting a person's first name and email ID, respectively.

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



function main() {
    // Answer
    const N = parseInt(readLine(), 10);
    const patten = new RegExp("@gmail.com");
    const names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];

        patten.test(emailID) && names.push(firstName);
    }

    names.sort().forEach(name => console.log(name));
}
