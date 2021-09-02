// Day 3: Intro to Conditional Statements

// Task 
// Given an integer, n, perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not n is weird.

function main() {
    const N = parseInt(readLine(), 10);
    // Odd Number
    if (N % 2) {
        console.log("Weird");
    // Even
    } else {

        if (N >= 2 && N <= 5) {
            console.log("Not Weird");
        } else if (N >= 6 && N <= 20) {
            console.log("Weird");
        } else {
            console.log("Not Weird");
        }
        
    }
}