// Find Missing Smallest Positive Number 
// O(N) time only

// [3,4,7,1]
function smallest(array) {
    let min = 1;
    array.sort((a,b) => a - b); // [1,3,4,7]

    for (let i in array) {
        // 1 -> 1
        // 3 -> 2 (since 2 not present , after index 2 all numbers will not match with the index)
        // 4 -> 2
        // 7 -> 2
        if (array[i] > -1 && array[i] === min) {
                min++;
        }
    }

    return min;
}

function smallest2(A) {
    const len = A.length;
    const hash = {};
    for (let i = 0; i < len; i++) {
        // here we are making an object with all 
        // numbers in a given array as object keys and values
        // if 0 is given as possible digit we could assing 
        // hash[A[i]] = true; or any truthy value
        hash[A[i]] = A[i];
    }
    for (let i = 1; i < 1000002; i++) {
        // here we are trying to find any number 
        // between 1 and 1000001 (given constraints) 
        // which do not exists in an object
        // if the number is not in the object that's our missing one
        if(!hash[i]) return i;
    }
    return 1;
}

function smallest3(array) {
    array.sort((a, b) => a - b);
    return array.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);
}

module.exports = smallest;