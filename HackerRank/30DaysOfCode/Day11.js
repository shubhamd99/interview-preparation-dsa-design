// Day 11: 2D Arrays

// Given a 6x6 2D Array, A:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:

// a b c
//   d
// e f g

// There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.


function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = arr.reduce((target, rows, index) => {
        rows.reduce((subTarget, item, subIndex) => {
            if (index < arr.length - 2 && subIndex < arr.length - 2) {
                // Creating Matrix
                const matrix = arr[index][subIndex] + arr[index][subIndex + 1] + arr[index][subIndex + 2] + arr[index + 1][subIndex + 1] + arr[index + 2][subIndex] + arr[index + 2][subIndex + 1] + arr[index + 2][subIndex + 2];

                target.push(matrix)
            }
        }, []);

        return target;
    }, []);
    // console.log(result) // [ 7, 4, 2, 0, 4, 8, 10, 8, 3, 6, 7, 6, 3, 9, 19, 14 ]
    console.log(Math.max.apply(null, result));
}
