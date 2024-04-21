// Implement a function that performs an insertion sort.
// The function should take in an array of integers and return an array with the integers sorted in ascending order.
// The input array is modified.

// Insertion sort is a simple sorting algorithm which compares elements one at a time with preceding element(s),
// "inserting" them into the correct position, and progressively building up a sorted array.

// The algorithm starts by examining the 2nd element of the input array (the "current" element),
// and compares it with its preceding element (i.e. the 1st element).
// If the current element is smaller, we swap their places (by copy).
// The result is that the first 2 elements are sorted correctly in ascending order.

// The algorithm then moves onto the next element in the input list and compares it with preceding elements (already sorted in ascending order) to insert it into the right position

// IMP: Insertion sort is a stable, in-place, comparison-based algorithm that works well for small to medium-sized arrays as well as arrays that are partially sorted.

// Clarification Questions
// Should the data be sorted in an ascending or descending order?
// Should the data be sorted in-place or is it acceptable to use additional data structures?
// What kinds of inputs do we need to handle?

// Selection Vs. Insertion sort:-

// Selection sort works by repeatedly finding the smallest element in the unsorted portion of the list and
// swapping it with the first element of the unsorted portion.
// This process is repeated until the entire list is sorted.
// Time complexity - O(n^2)
// Space - O(1)
// In-place - Yes

// Insertion sort works by repeatedly taking an element from the unsorted portion of the list and
// inserting it into the correct position in the sorted portion of the list.
// This process is repeated until the entire list is sorted.
// Time complexity - O(n^2)
// Space - O(1)
// In-place - Yes

/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function insertionSort(arr) {
  // Iterate through the array, starting with the 2nd element.
  for (let i = 1; i < arr.length; i++) {
    // Store the current value in a variable so it
    // can be shifted to the correct position after the comparisons.
    let currentValue = arr[i]; // O(1) Space. Amount of memory required to store an integer does not depend on the value of the integer

    // Initialize a pointer for the index of the previous element
    // so we can use it to iterate progressively backwards
    // through preceding elements.
    let j = i - 1;

    // Keep iterating backwards through preceding elements
    // as long as the previous element is greater than the current value.
    while (j >= 0 && arr[j] > currentValue) {
      // "Move" the previous element one position to the right.
      // if it's bigger than currentValue.
      arr[j + 1] = arr[j];

      // Decrement the pointer so as to keep comparing with the
      // previous element.
      j--;
    }

    // Set the currentValue into its final position.
    arr[j + 1] = currentValue;
  }

  // Return the sorted array.
  return arr;
}

insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
