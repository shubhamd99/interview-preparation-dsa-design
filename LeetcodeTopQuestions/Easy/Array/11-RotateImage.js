// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// That ~~ is a double NOT bitwise operator. ~~(n / 2)
// It is used as a faster substitute for Math.floor() for positive numbers.
// It does not return the same result as Math.floor() for negative numbers,
// as it just chops off the part after the decimal.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
*/
var rotate = function(matrix) {
    let n = matrix.length;
    let depth = ~~(n / 2);

    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1;
        let opp = n - 1 - i;

        for (let j = 0; j < len; j++) {
            let temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[opp-j][i];
            matrix[opp-j][i] = matrix[opp][opp-j];
            matrix[opp][opp-j] = matrix[i+j][opp];
            matrix[i+j][opp] = temp;
        }
    }

    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// Output: [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]