function printAllPairs(n) {
    for (let i = 0; i < n; i++) { // n number of operations
        for (let j = 0; j < n; j++) { // n number of operations (nested inside)
            console.log(i, j);
        }
    }
}

// o(n) operation inside of an O(n) operation. --> O(n * n) = O(n ^ 2)
// Quadratic

printAllPairs(2);