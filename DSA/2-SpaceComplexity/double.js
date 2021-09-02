
// O(n) space
function double(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]); // storing n number of times of the input array length
    }

    return newArr; // n numbers
}

console.log(double([4,5,6])); // [ 8, 10, 12 ]

