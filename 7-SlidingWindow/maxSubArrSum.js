// Write a function called maxSubArraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null

// Naive solution
// Time Complexity O(n^2)
function maxSubarraySum2(arr, num) { // [1,2,5,2,8,1,5], 2
    if (num > arr.length) {
        console.log(null);
        return null;
    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) { // i < (7 - 2 + 1) = 6
        let temp = 0;
        // 1 + 2
        // 2 + 5
        // 5 + 2
        // 2 + 8
        // 8 + 1
        // 1 + 5
        for (let j = 0; j < num; j++) {
            // console.log(arr[i + j])
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }

    console.log(max);
    return max;
}

// Refactored
// Time Complexity O(n)
function maxSubarraySum(arr, num) { // [1,2,5,2,8,1,5], 2

    if (num > arr.length) {
        console.log(null);
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // 1 + 2 = 3
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // 3
    tempSum = maxSum;

    // from length 2 < 7
    for (let i = num; i < arr.length; i++) {

        // we dont have to add all n consecutive numbers everytime to get the sum,
        // we can subtract first one and add the next one to get the total

        // Example [3,2,5,10]
        // 3 + 2 + 5 = 10
        // Now, we have to calculate 2 + 5 + 10
        // Since, 3 + 2 + 5 = 10, now will subtract 1st one , 10 - 3 = 7, then will add current one , 7 + 10 = 17
        // Result is same as 2 + 5 + 10 = 17
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    console.log(maxSum);
    return maxSum;
}