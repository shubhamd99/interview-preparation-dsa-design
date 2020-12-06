// Write a function called same, which accepts two arrays.The function should return true,
// if every value in the array has its corresponding value squared in the second array.

same([1,2,3], [4,1,9]); // true
same([1,2,3], [1,9]); // false
same([1,2,1], [4,4,1]); // false (must be same frequency)

// Two-Three Loops O(n) is better and faster than Nested loops O(n^2)

// O(n^2) Quadratic Time
function same2(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        console.log(false);
        return false;
    }

    // Nested Loops
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // Sqaure
        if (correctIndex === -1) {
            console.log(false);
            return false;
        }

        arr2.splice(correctIndex, 1);
    }
    console.log(true);
    return true;
}

// O(n) Linear Time
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log(false);
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Creating Char Map for array 1
    for (let val of arr1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }

    // Creating Char Map for array 2
    for (let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }

    // Looping through CharMap1 and comparing keys with CharMap2
    for (let key in frequencyCounter1) {
        // Will check if square value is present or not in frequencyCounter2 charMap
        if (!(key ** 2 in frequencyCounter2)) { // !frequencyCounter2[key ** 2]
            console.log(false);
            return false;
        }
        // Will check if number of keys are same in both charMap object
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}