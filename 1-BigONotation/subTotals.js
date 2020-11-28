// O(n ^ 2)
function subtotals(array) {
    var subtotalArray = Array(array.length); // 1 Assignment

    // n number of operations
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;

        // n number of operations (nested)
        for (var j = 0; j <= i; j++) {
            subtotal += array[j]; // n number of assignments
        }
        subtotalArray[i] = subtotal; // n number of assignments
    }

    return subtotalArray;
}