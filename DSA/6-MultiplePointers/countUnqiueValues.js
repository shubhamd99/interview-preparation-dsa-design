// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will be always sorted.

countUniqueValues([1,1,1,1,1,2]); // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2,-1,-1,0,1]); // 4

// Logic Explain:
// we will use two counters to keep track of the array
// [1,1,1,2,3,4] --> a = 1, b = 1 (same will increment b by one index)
// [1,1,1,2,3,4] --> a = 1, b = 1 (same will increment b by one index)
// [1,1,1,2,3,4] --> a = 1, b = 2 (not same will assign b to a and will increment b by one index)
// [1,1,1,2,3,4] --> a = 2, b = 3 (not same will assign b to a and will increment b by one index)
// [1,1,1,2,3,4] --> a = 3, b = 4 (not same will assign b to a and will increment b by one index)

// Time Complexity - O(n) Linear
// Space Complexity - O(1)
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    // Position of i and j for all inputs given above
    //                        i              j
    //  [ 1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13 ]

    //       i            j
    //  [ 1, 2, 1, 1, 1, 2 ]

    //               i  j
    //  [ -2, -1, 0, 1, 1 ]

    console.log(i + 1);
    return i + 1;
}

// My First Try
function countUniqueValues2(arr) {
    // console.log("Input: ", arr);
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) {
        return 0;
    }

    let counterOne = 0;
    let counterTwo = 1;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        
        // console.log(arr[counterOne], arr[counterTwo], counterOne, counterTwo)
        if (arr[counterTwo] !== arr[counterOne]) {
            result.push(arr[counterOne])
            counterOne = counterTwo;
            counterTwo++;
        } else {
            counterTwo++;
        }
    }

    console.log("counterOne", result.length)
    return counterOne;
}