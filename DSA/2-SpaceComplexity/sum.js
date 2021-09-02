function addUpTo(arr) {
    let total = 0; // one number

    // i = 0 --> another number
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

// two number variables
// Constant space
addUpTo(10); // O(1)
