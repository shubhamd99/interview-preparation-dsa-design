// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) { // 3
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]); // [ [], [], [] ]
    }

    // row -> horizontal
    // column -> vertical

    let counter = 1;

    let startColumn = 0;
    let endColumn = n - 1; // last column (3 - 1 = 2)
    let startRow = 0;
    let endRow = n - 1; // last row (3 - 1 = 2)

    while(startColumn <= endColumn && startRow <= endRow) {
        // Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;  // [1, 2,  3],
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter; 
            counter++;
            // 4],
            // 5]
        }
        endColumn--;
        
        // Bottom Row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++; //  [7, 6,
        }
        endRow--;

        // Start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++; //  9
        }
        startColumn++;
    }

    return results;
}

module.exports = matrix;