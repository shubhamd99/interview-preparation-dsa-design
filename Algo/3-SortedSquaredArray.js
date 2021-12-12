// array = [1, 2, 3, 5, 6, 8, 9]
// Ans - [1, 4, 9, 25, 36, 64, 81]

// O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0); // O(n) space

    // O(n) for loop
    for (let idx = 0; idx < array.length; idx++) {
        const curValue = array[idx];
        sortedSquares[idx] = curValue * curValue;
    }

    // O(nlogn) sorting
    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

// O(n) time | O(n) space
function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0; // First Index
    let largerValueIdx = array.length - 1; // Last Index since its sorted

    // Reverse Loop
    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) { // |-3| -> 3 absolute value
            sortedSquares[idx] = smallerValue * smallerValue; // -3 * -3 = 9 (minus cancel to become positive)
            smallerValueIdx++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }

    return sortedSquares;
}

// [-7,-5,-4,3,6,8,9]
// First -> -7
// Last -> 9
// [0,0,0,0,0,0,0]
// Will compare both to find which one is bigger then will put it in the end
// 7 < 9
// [0,0,0,0,0,0,81]

// [-7,-5,-4,3,6,8, 9]
// First -> -7
// Last -> 8
// [0,0,0,0,0,0,81]
// 7 < 8
// [0,0,0,0,0,64,81]

// [-7,-5,-4,3,6,8, 9]
// First -> -7
// Last -> 6
// [0,0,0,0,0,64,81]
// 7 > 6
// [0,0,0,0,49,64,81]

// [-7,-5,-4,3,6,8, 9]
// First -> -5
// Last -> 6
// .....