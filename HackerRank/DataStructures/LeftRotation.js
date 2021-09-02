// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left.
// Given an integer, , rotate the array that many steps left and return the result.
// d = 2
// arr = [1,2,3,4,5]
// After 2 rotations, arr = [3,4,5,1,2]

// Function Description:
// Complete the rotateLeft function in the editor below.
// rotateLeft has the following parameters:
// int d: the amount to rotate by
// int arr[n]: the array to rotate

// Returns:
// int[n]: the rotated array

// The first line contains two space-separated integers that denote n, the number of integers, and d,
// the number of left rotations to perform. 
// The second line contains n space-separated integers that describe arr[].

// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

// To perform d = 4 left rotations, the array undergoes the following sequence of changes:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function rotateLeft(d, arr) {
    // Write your code here
    const numOfRotation = d;
    const result = arr.slice();

    for (let i = 0; i < numOfRotation; i++) {
        const firstElm = result.shift();
        result.push(firstElm);
    }

    return result;
}
