// You are given a very large array like [0,0,0,0,0,0,0,0,1,1,1,1,1].
// The array has only 1's and 0's
// All the 0s are at the beginning and 1's are at the end
// You have to find the position in the array where 0's end and 1's begin

const arr = [0,0,0,0,0,0,0,0,1,1,1,1,1];

// Linear Search - O(n)
const findStartAndEndIndex = (array, match = 1) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === match) {
            return i;
        }
    }
    return -1;
};


// Binary Search - O(logn)
const findStartAndEndIndex2 = (array, match = 1) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < match) {
            min++;
        } else if (currentElement > match) {
            max--;
        } else {
            return middle;
        }
    }

    return -1;
};


console.log(findStartAndEndIndex(arr));
console.log(findStartAndEndIndex(arr));