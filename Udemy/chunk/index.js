// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
       const arr = array.slice(index, index + size);
       chunked.push(arr);
       index += size;
    }

    return chunked;
}

function chunk2(array, size) {
    const chunked = [];

    for (let element of array) {
        const lastElm = chunked[chunked.length - 1];

        if (!lastElm || lastElm.length === size) {
            chunked.push([element]);
        } else {
            lastElm.push(element);
        }
    }

    return chunked;
}

module.exports = chunk;