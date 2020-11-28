
// O(n) space
function double(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]); // storing n number of times of the input array length
    }

    return newArr; // n numbers
}

