// Sequence will appear in the same order as they appear in the array.

// Traverse in array
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
    let seqIndex = 0; // Pointer in forward direction

    for (const value of array) {
        if (seqIndex === sequence.length) break;
        if (sequence[seqIndex] === value) seqIndex++;
    }

    return seqIndex === sequence.length;
}

// Traverse in array
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
    let arrIndex = 0;
    let seqIndex = 0;

    while (arrIndex < array.length && seqIndex < sequence.length) {
        if (array[arrIndex] === sequence[seqIndex]) seqIndex++;
        arrIndex++;
    }

    return seqIndex === sequence.length;
}