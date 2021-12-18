// Problem Link - https://leetcode.com/problems/set-matrix-zeroes/
// Sol - https://dev.to/alysachan830/leetcode-in-js-matrix-zeros-2jbf

// Matrix is a way to store data in an organized form in the form of rows and columns.
// Matrices are usually used in computer graphics to project 3-dimensional space onto a 2-dimensional screen. 

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

const matrix = [
    [1,1,1],
    [1,0,1],
    [1,1,1],
];

const matrix2 = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5],
];

// row -> top to bottom
// column -> left to right

// O(m+n)
// matrix 1

// Time Complexity = O(n x m + n x m) because we linearly traverse the array twice
// Space Complexity = O(n) + O(m) for taking two dummy arrays
const setZeroes = function(matrix) {
    
    // Create 2 arrays.
    // One is to record which column has 0, another one is to record which row has 0.
    const colZero = Array(matrix[0].length); // height of the matrix
    const rowZero = Array(matrix.length); // width of the matrix

    // Scan through the whole original matrix,
    // if there's a row contains 0, record it in colZero and rowZero.
    // We don't change anything in the original matrix right now.
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                colZero[row] = 0;
                rowZero[col] = 0;
            }
        }
    }

    // col [ <1 empty item>, 0, <1 empty item> ]
    // row [ <1 empty item>, 0, <1 empty item> ]

    // Based on the record results we have in colZero and rowZero,
    // now we update the original matrix.
    for (let row = 0; row < matrix.length; row++) {
        if (colZero[row] === 0) {
            matrix[row] = Array(matrix[0].length).fill(0);
            continue;
            // because the whole array is already set to 0,
            // no need to check each value's column has 0 or not, 
            // for updating the individual value to 0.
        }
        for (let col = 0; col < matrix[0].length; col++) {
            if (rowZero[col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
};

console.log(setZeroes(matrix)); // [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]
console.log(setZeroes(matrix2)); // [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]