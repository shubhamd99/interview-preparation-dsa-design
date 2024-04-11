// Implement a function that performs a selection sort.
// The function should take in an array of integers and return an array with the integers sorted in ascending order.

// Selection sort is a sorting algorithm that repeatedly scans an unsorted array and with each iteration finds the minimum element to build up a sorted array.
// Here is the basic idea behind selection sort:
// Find the minimum element in the array.
// Swap it with the element at the first position.
// Find the second minimum element in the array.
// Swap it with the element at the second position.
// Continue this process until the entire array is sorted.

// Clarification Questions
// If unspecified:

// Should the data be sorted in an ascending or descending order?
// Should the data be sorted in-place or is it acceptable to use additional data structures?
// What kinds of inputs do we need to handle?
// Will it just be an array of integers or should we handle other data types?
// Are there a large number of duplicate elements?
// How should negative numbers be handled?

// Solution 1 - Brute Force

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// Time Complexity
// The time complexity of selection sort is O(n2) - the same in all cases. This can be derived by observing the number of loops. There are 2 loops so the complexity is O(n2).

// Space Complexity
// The space complexity of selection sort is O(1) when performed in-place, as it only requires a constant amount of extra space for storing variables.
// However, if the sorting algorithm is not performed in-place, the space complexity would be O(n) as additional memory would be required to store the sorted elements.

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function selectionSort2(arr) {
  // Iterate through the unsorted portion of the array.
  for (let i = 0; i < arr.length; i++) {
    // Initialize index of min element to the start
    // of the unsorted section.
    let minIndex = i;
    // Find the min element.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found min element with the first element of the
    // unsorted section.
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    // By the end of each outer loop iteration,
    // [0, i] are sorted.
  }

  return arr;
}

// If asked to sort in descending order, change the comparison to find maxIndex instead of minIndex,
// by using >= instead of <, in the relevant comparison as per below:

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function selectionSortDesc(arr) {
  // Iterate through the unsorted portion of the array.
  for (let i = 0; i < arr.length; i++) {
    // Initialize index of min element to the start
    // of the unsorted section.
    let maxIndex = i;
    // Find the min element.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= arr[maxIndex]) {
        maxIndex = j;
      }
    }

    // Swap the found min element with the first element of the
    // unsorted section.
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];

    // By the end of each outer loop iteration,
    // [0, i] are sorted.
  }

  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log(selectionSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]

console.log(selectionSort2([9, 3, 6, 2, 1, 11])); // [ 11, 9, 6, 3, 2, 1 ]
console.log(selectionSort2([12, 16, 14, 1, 2, 3])); // [ 16, 14, 12, 3, 2, 1 ]

console.log(selectionSortDesc([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
console.log(selectionSortDesc([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16]
