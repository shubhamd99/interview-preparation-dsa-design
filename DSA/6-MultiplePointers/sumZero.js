// write a function called sum zero which accepts a sorted array of integers.
// The function should find the first pair where the sum is zero. 
// input : sorted array

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

// Naive solution
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function sumZero1(arr, sum = 0)  {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log([arr[i], arr[j]])
                return [arr[i], arr[j]];
            }
        }
    }
}

// Refactor
// Time Complexity - O(N)
// Space Complexity - O(1)
function sumZero(arr)  {
    // two pointers, one at beginning and one at the end
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--; // 10 --> 9, 8 --> 7
        } else if (sum < 0) {
            left++; // -1 --> 1, 0 --> 1, 1 --> 2
        }
    }
}