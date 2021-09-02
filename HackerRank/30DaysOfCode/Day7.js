// Day 7: Arrays

// Given an array, A, of N integers, print A's elements in reverse order as a single line of space-separated numbers.

// Input
// 4
// 1 4 3 2

// Output
// 2 3 4 1

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const reverseArray = (array) => {
        let temp = null;
        const length = array.length;
        
        for (let i = 0; i < length / 2; i++){
            temp = array[i];
            array[i] = array[length - 1 - i];
            array[length - 1 - i] = temp;
        }

        return array;
    }

    console.log(reverseArray(arr).join(' '));
}

