// Day 20: Sorting

// Today, we're discussing a simple sorting algorithm called Bubble Sort.
// Consider the following version of Bubble Sort:

// for (int i = 0; i < n; i++) {
//     // Track number of elements swapped during a single array traversal
//     int numberOfSwaps = 0;
    
//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//             numberOfSwaps++;
//         }
//     }
    
//     // If no elements were swapped during a traversal, array is sorted
//     if (numberOfSwaps == 0) {
//         break;
//     }
// }

// The first line contains an integer, n, denoting the number of elements in array a. 
// The second line contains n space-separated integers describing the respective values of a0, a1, a2,......a n-1

// Note: What is do While Loop in Javascript?
// This loop will always be executed at least once, even if the condition is false,
// because the code block is executed before the condition is tested:

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here

    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;

    const bubbleSort = (values) => {
        let swapped;

        do {
            swapped = false;
            // const arr = [4, 5 ,6,7]
            // let { length } = arr;
            for (let i = 0, { length } = values; i < length; i++) {
                if (values[i] > values[i + 1]) {
                    let tmp = values[i];
                    
                    values[i] = values[i + 1];
                    values[i + 1] = tmp;
                    
                    swapped = true;
                    numberOfSwaps++;
                }
            }
        } while (swapped);

        return values;
    };

    let result = bubbleSort(a);

    console.log(`Array is sorted in ${numberOfSwaps} swaps.\nFirst Element: ${result[0]}\nLast Element: ${result[n - 1]}`);

}


// Bubble Sort Example
function bubbleSortExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}