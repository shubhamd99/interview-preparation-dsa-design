// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

// This challenge introduces precision problems. The test cases are scaled to six decimal places,
// though answers with absolute error of up to 10 to the power -4 are acceptable.

// Example: arr = [1,1,0,-1,-1]

// There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
// Results are printed as:
// 0.400000
// 0.400000
// 0.200000

// Complete the plusMinus function below.
function plusMinus(arr) {
    const length = arr.length;
    const positiveNumbers = [];
    const negativeNumbers = [];
    const zeroNumbers = [];

    for (let number of arr) {
        if (number === 0) {
            zeroNumbers.push(number);
        } else if (number < 0) {
            negativeNumbers.push(number);
        } else if (number > 0) {
            positiveNumbers.push(number);
        }
    }

    const ratioPositive = positiveNumbers.length / length;
    const ratioNegative = negativeNumbers.length / length;
    const ratioZero = zeroNumbers.length / length;

    console.log(ratioPositive);
    console.log(ratioNegative);
    console.log(ratioZero);
}

// Second Example - Complete the plusMinus function below.
function plusMinus(arr) {
    const length = arr.length;
    const positiveNumbersCount = arr.filter(p => p > 0).length;
    const negativeNumbersCount = arr.filter(n => n < 0).length;
    const zeroNumbersCount = arr.filter(n => n === 0).length;

    const ratioPositive = positiveNumbersCount / length;
    const ratioNegative = negativeNumbersCount / length;
    const ratioZero = zeroNumbersCount / length;

    console.log(ratioPositive);
    console.log(ratioNegative);
    console.log(ratioZero);
}

