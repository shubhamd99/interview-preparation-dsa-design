// Two Sum
// The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S.

// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
// your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

// runs in O(n) time
// O(N) means in proportion to the number of items.
function getTwoSum(arr, sum) {
    let result = [];

    // check each element in array
    for(let i = 0; i < arr.length; i++) {

        // check each other element in the array next to it
        for (let j = i + 1; j < arr.length; j++) {

            // determine if these two elements sum to S
            if (arr[i] + arr[j] === sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    console.log(result)
    return result;
}

module.exports = getTwoSum;