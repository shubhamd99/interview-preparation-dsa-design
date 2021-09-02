// Given a 6x6 2D Array, arr:

// An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//  d
// e f g

// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values.
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 X 6.

// Returns - int: the maximum hourglass sum
// Input - Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].
// Output - Print the largest (maximum) hourglass sum found in arr.

// Sample Input
// 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output
// 19

// Explanation (16 hourglasses)
// 1 1 1    1 1 0    1 0 0     0 0 0
//   1        0        0         0
// 1 1 1    1 1 0    1 0 0     0 0 0
// ............. "" ..............
// ............. "" ..............
// 0 0 2    0 2 4    2 4 4     4 4 0
//   0        0        2         0
// 0 0 1    0 1 2    1 2 4     2 4 0

// The hourglass with the maximum sum (19) is:
// 2 4 4
//   2
// 1 2 4

// Complete the hourglassSum function below.
function hourglassSum(array) {
    let maxSum;

    for (let i = 0; i <= 3; i ++) {
        for (let j = 0; j <= 3; j ++) {
            let top    = array[i][j] + array[i][j+1] + array[i][j+2];
            let middle = array[i+1][j+1];
            let bottom = array[i+2][j] + array[i+2][j+1] + array[i+2][j+2];
            let total  = top + middle + bottom;

            if (total > maxSum || maxSum === undefined) {
                maxSum = total;
            }    
        };
        
    };

    return maxSum;
}