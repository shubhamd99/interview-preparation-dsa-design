// Day 9: Recursion 3

// Recursive Method for Calculating Factorial 
// Consider the following steps:
// factorial(3) = 3 x factorial(2)
// factorial(2) = 2 x factorial(1)
// factorial(1) = 1

// Complete the factorial function below.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1)

}