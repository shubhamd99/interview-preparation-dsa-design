// {
//    "coins": [5, 7, 1, 1, 2, 3, 22]
// }
// Ans - 20

// Minimum amount of change (the minimum sum of money)

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);

    // Minimum sum of money
    let currentChangeCreated = 0;

    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }

        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;
}