// Problem Link - https://www.geeksforgeeks.org/minimum-number-increment-operations-make-array-elements-equal/

// Making elements of two arrays same with minimum increment/decrement

// Given two arrays of same size, we need to convert the first array into another with minimum operations.
// In an operation, we can either increment or decrement an element by one.
// Note that orders of appearance of elements do not need to be same.

let a = [3, 1, 1];
let b = [1, 2, 2];

let c = [2,3];
let d = [0,0];

let e = [3,1,1];
let f = [1,1,2];

// O(n Log n)
const MinOperation = (a, b, n) => {
    // sorting both arrays 
    // in ascending order
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    // variable to store 
    // the final result
    let result = 0;

    // After sorting both arrays
    // Now each array is in non-
    // decreasing order. Thus,
    // we will now compare each
    // element of the array and
    // do the increment or decrement
    // operation depending upon the
    // value of array b[].
    for (let idx = 0; idx < n; idx++) {
        if ((a[idx] > b[idx]) || (a[idx] < b[idx])) {
            result += Math.abs(a[idx] - b[idx]);
        }
    }

    return console.log(result);
}

MinOperation(a, b, a.length); // 2
MinOperation(c, d, c.length); // 5
MinOperation(e, f, e.length); // 1