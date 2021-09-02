// Math.ceil --> Round a number upward to its nearest integer:

// O(n)
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2)); // 1 division

    // n number of operations
    for (var i = 0; i < array.length; i++) {
        // n number of mod (%)
        if (i % 2 === 0) {
            // Accessing elements in an array (by index) or object (by key) is constant
            // n number of assignments
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}