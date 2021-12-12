// Starting with a 1-indexed array of zeros and a list of operations
// for each operation add a value to each of the array element between two given indices, inclusive.
// Once all operations have been performed, return the maximum value in the array.

// Example,
// n = 10
// queries = [[1,5,3], [4,8,7], [6,9,1]]

// Queries are interpreted as follows:
// a b k
// 1 5 3
// 4 8 7
// 6 9 1

// Add the values of k between the indices a and b inclusive:
// index->	 1 2 3  4  5 6 7 8 9 10
//	[0,0,0, 0, 0,0,0,0,0, 0]
//	[3,3,3, 3, 3,0,0,0,0, 0]
//	[3,3,3,10,10,7,7,7,0, 0]
//	[3,3,3,10,10,8,8,8,1, 0]

// Sample Input
// 5 3
// 1 2 100
// 2 5 100
// 3 4 100

// Sample Output
// 200

// Explanation
// After the first update the list is 100 100 0 0 0. 
// After the second update list is 100 200 100 100 100. 
// After the third update list is 100 200 200 200 100.
// The maximum value is 200.

// Slow -- Runtime complexity: O(n)
// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {

    const arr = Array(n + 1);
    let maxValue = 0;
    let currentNumber = 0;

    for (let i = 0; i <= queries.length - 1; i++) {
        const [startRange, endRange, value] = queries[i];

        arr[startRange] = arr[startRange] || { start: 0, end: 0 };
        arr[endRange] = arr[endRange] || { start: 0, end: 0 };
        arr[startRange].start += value;
        arr[endRange].end += value;
    }

    // We assign the current value to the variable currenNumber, then we check if it is higher than the current maxValue ,
    // if so reassign the maxValue and then unassign the currentNumber for the next iteration
    for (let i = 0; i <= arr.length - 1; i++) {
        const cell = arr[i];
        if (cell) {
            currentNumber += cell.start;

            if (currentNumber > maxValue) {
                maxValue = currentNumber;
            }
            currentNumber -= cell.end;
        }
    }

    // arr:
    // [ <1 empty item>, 
    // { start: 100, end: 0 },
    // { start: 100, end: 100 },
    // { start: 100, end: 0 },
    // { start: 0, end: 100 },
    // { start: 0, end: 100 } ]

    return maxValue;
}


// Slow -- Runtime complexity: O(n²)
// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {

    let arr = Array(n).fill(0);
    
    for (let i = 0; i <= queries.length - 1; i++) {
        const [a,b,k] = queries[i];
        for (let j = (a - 1); j <= (b - 1); j++) {
            arr[j] = (arr[j] + k)
        }
    }

    return Math.max.apply(null, arr);
}

// Without Math.max.apply -- Runtime complexity: O(n²)
function arrayManipulation(n, queries) {

    let arr = Array(n).fill(0);
    let max = 0;
    
    for (let i = 0; i <= queries.length - 1; i++) {
        const [a,b,k] = queries[i];
        for (let j = (a - 1); j <= (b - 1); j++) {
            const sum = arr[j] + k;
            arr[j] = sum
            if (max < sum) {
                max = sum
            }
        }
    }

    return max;
}

