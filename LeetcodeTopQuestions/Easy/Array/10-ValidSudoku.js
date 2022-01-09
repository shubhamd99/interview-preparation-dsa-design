// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

// Valid Sudoku

// Sudoku grid: Sudoku is played on a grid of 9 x 9 spaces.
// Within the rows and columns are 9 “squares” (made up of 3 x 3 spaces).
// Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9,
// without repeating any numbers within the row, column or square.

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The Sudoku board is represented by a 2D array.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
*/
// Time - O(n^2) | Space - O(n)
// 3x3 grid - (row / 3) + (column / 3)
var isValidSudoku = function(board) {
    let map = {};
    let cell = 0;
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            cell = board[row][col];
            if (cell === '.') continue;
            if (
                map['i' + row + cell] ||
                map['j' + col + cell] ||
                map['b' + Math.floor(row / 3) + Math.floor(col / 3) + cell]
            ) return false;
            map['i' + row + cell] = 1;
            map['j' + col + cell] = 1;
            map['b' + Math.floor(row / 3) + Math.floor(col / 3) + cell] = 1;
        }
    }

    return true;
};

console.log(isValidSudoku(
    [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
)); // Output - True

console.log(isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
)); // Output - Flase
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.