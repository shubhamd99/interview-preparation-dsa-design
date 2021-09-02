// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements and swaps them if they are in the wrong order.
// The pass through the list is repeated until the list is sorted.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order)
// from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        // Last Index
        if (indexOfMin !== i) {
            const lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

// Merge sort is a sorting technique based on divide and conquer technique.
// With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // [1, 2, 3, 4]
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center); // [1, 2]
    const right = arr.slice(center);  // [3, 4]

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };