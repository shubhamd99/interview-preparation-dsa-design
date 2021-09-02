// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is \15 - 17| = 2.

// Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Output:
// 15

// Explanation:

// The primary diagonal is:
// 11
//    2
//       -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4


// The secondary diagonal is:
//        4
//     5
//  10

// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15
// Note: |x| is the absolute value of x

function diagonalDifference(arr) {
    // Write your code here
    const matrixSize = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j ++) {

            // an element from the main diagonal
            if (i === j) { 
                diag1 += arr[i][j];
            }

            // an element from the second diagonal
            if (i + j === matrixSize - 1){
                diag2 += arr[i][j];
            }
        }
    }

    // The Math.abs() function returns the absolute value of a number, that is, Ex. Math.abs('-1');     // 1
    return Math.abs(diag1 - diag2);

}
