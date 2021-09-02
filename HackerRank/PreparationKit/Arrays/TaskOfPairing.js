// Task Of Pairing

// 2 Dumbbells of weight 1
// 4 Dumbbells of weight 2
// 5 Dumbbells of weight 3
// [1,1],[2,2],[2,2],[3,3],[3,3],[3]

// i th elements represent the number of dumbbells
// i + 1 represents the weight

// Example - arr[3,6,5,3] --> 0th index = (dumbbell: 3, weigth: 0 + 1 = 1)
// Total chunks --> [1,1], [1, 2], [2,2], [2,2], [2, 3], [3,3], [3,3], [4,4], [4]
// Pairs --> [1,1], [1, 2], [2,2], [2,2], [2, 3], [3,3], [3,3], [4,4]
// No. Of Pairs --> 8

// Simple Method (Not Good)
function taskOfPairing(freq) {
    // Write your code here
    let pairs = [];
    
    let sum = freq.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);
    console.log("Total Sum: ", sum)
    
    for (let i = 0; i < sum; i++) {
        if (!pairs[pairs.length - 1] || pairs[pairs.length - 1].length === 2) {
            pairs.push([1]);
        } else {
            pairs[pairs.length - 1].push(1)
        }
    }
    
    console.log("Pairs Before", pairs);
    if (pairs[pairs.length - 1].length === 1) {
        pairs.pop();
    }
    console.log("Pairs After", pairs);
    
    return pairs.length;
}

taskOfPairing([3,6,5,3]);

