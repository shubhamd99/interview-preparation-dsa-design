// Nice Teams
// What is the maximum number of teams can be formed
// rating = [1,2,3,4,5,6]
// minDiff = 4

// 5 -1 = 4 --> (5,4)
// 6 - 2 = 4 --> (6,4)
// Ans - 2 (2 pairs can be formed)

// Method 1 - Simple --> Time Complexity of O(n^2)
function maxPairs(skillLevel, minDiff) {
    // Write your code here
    console.log(skillLevel, minDiff);
    let count = 0;
    let pairs = [];

    for (let i = 0; i < skillLevel.length; i++) {
        for (let j = i + 1; j < skillLevel.length; j++) {
            if (Math.abs(skillLevel[i] - skillLevel[j]) === minDiff) {
                count++;
                pairs.push([skillLevel[i], skillLevel[j]])
            }
        }
    }
    
    console.log("All Pairs: ", pairs);
    console.log("Pairs Count: ", count);
    return count;

}

maxPairs([1,2,3,4,5,6], 4);

// // Method 2 --> Time Complexity of O(n^2)
// Instead of looping over all of the numbers twice, what if I started by keeping track of each number
// in the numbers array in an Object. I can do that using reduce and for each item, if it already is a key in the obj,
// increment the value, otherwise add it as a key to the obj:

function maxPairs2(skillLevel, minDiff) {
    
    const hashMap = {}; // { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1 }
    
    for (let char of skillLevel) {
        if (!hashMap.hasOwnProperty(char)) {
            hashMap[char] = 1
        }
        else {
            hashMap[char]++
        }
    }
    

    let counter = 0
    const keys = Object.keys(hashMap); // { '1', '2', '3', '4', '5', '6' }

    for (let i = 0; i < keys.length; i++) {
        let target = parseInt(keys[i]) + minDiff;
        // 1 + 4 = 5 (YES)
        // 1 + 4 = 6 (YES)
        // 1 + 4 = 7
        // 1 + 4 = 8
        // 1 + 4 = 9
        // 1 + 4 = 10

        if (hashMap.hasOwnProperty(target)) {
            counter++
            delete hashMap[keys[i]]
        }
    }

    console.log("[Method 2] Pairs Counter: ", counter);
    return counter;
}

maxPairs2([1,2,3,4,5,6], 4);


// Binary Search For Sorted Array (Time Complexity - O(nLogn))
function maxPairs3(skillLevel, minDiff) {

    // skillLevel = skillLevel.sort(); // --> For Unsorted Array

    /* Standard binary search function */
    const binarySearch = (arr, low, high, x) => {
        if (low > high) {
            return -1;
        }

        let mid = Math.floor((low + high) / 2); 

        if (arr[mid] === x) {
            return mid;
        }

        if (x > arr[mid]) {
            return binarySearch(arr, (mid + 1), high, x);
        } else {
            return binarySearch(arr, low, mid - 1, x); 
        }
    }

    let count = 0;

    for (let i = 0; i < skillLevel.length; i++) {
        let res = binarySearch(skillLevel, i, skillLevel.length - 1, skillLevel[i] + minDiff) // OR low = i + 1, high = skillLevel.length
        // low - 1, high - 6, x - 5
        // low - 2, high - 6, x - 6
        // low - 3, high - 6, x - 7
        // low - 4, high - 6, x - 8
        // low - 5, high - 6, x - 9
        // low - 6, high - 6, x - 10
        if (res !== -1) {
            count++;
        }
    }

    console.log("[Method 3] Pairs Counter: ", count);
    return count;
}

maxPairs3([1,2,3,4,5,6], 4);
maxPairs3([1, 5, 3, 4, 2], 3);
