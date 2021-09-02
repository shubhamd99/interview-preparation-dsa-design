// JavaScript: Find the index of the pair of elements from an specified array whose sum equals a specific target number

// complexity O(n)
function twoSum(array, sum) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                result.push([i, j])
            }
        }
    }
    console.log(result);
    return result;
}


module.exports = twoSum;