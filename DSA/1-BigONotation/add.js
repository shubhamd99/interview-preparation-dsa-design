function addUpTo(n) {
    let total = 0; // 1 assignments

    // n number of additions (i++) and n assignments
    // 1 assignment (i = 0)
    // n comparisons (i <= n)
    for (let i = 0; i <= n; i++) {
        // n number of additions (+=) and n assignments
        total += i;
    }

    return total;
}

// No matter how many times the n it will be O(n)
console.log(addUpTo(6)); // Number of operations is bounded by a multiple of n (say, 1 O(n)) --> O(n)

// Efficient
function addUpTo2(n) {
    // Maths Formula
    // one multiplication, one addition and one division
    // 3 simple operations, regardless of the size of n
    return n * (n + 1) / 2;
}


console.log(addUpTo2(6)); // Always 3 operation --> O(1)