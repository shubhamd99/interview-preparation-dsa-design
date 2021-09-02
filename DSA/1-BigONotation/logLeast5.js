function logAtLeast5(n) {
    // loop will go till 5 or n, which ever one is larger
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(10) // O(n)

function logAtMost5(n) {
    // loop will go till 5 or n, which ever one is smaller
    // loop will max run upto 5
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(10) // O(5) --> O(1)