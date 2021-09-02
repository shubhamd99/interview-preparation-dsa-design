// Day 1: Data Types

// Sample Input
// 12
// 4.0
// is the best place to learn and practice coding!

// Sample Output
// 16
// 8.0
// HackerRank is the best place to learn and practice coding!

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    let int = 0;
    let doub = 0.0;
    let str = "";

    // Read and save an integer, double, and String to your variables.
    int = readLine();
    doub = readLine();
    str = readLine();

    // console.log("inputs", int, doub, str)

    console.log(parseInt(int) + i);
    console.log(parseFloat(Number(doub) + d).toFixed(1));
    console.log(s + "" + str);

    // Print the sum of both integer variables on a new line.

    // Print the sum of the double variables on a new line.

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.

}
