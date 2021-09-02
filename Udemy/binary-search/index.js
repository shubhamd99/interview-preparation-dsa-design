// Binary Search
// Binary Search is searching technique which works on Divide and Conquer approach.
// It used to search any element in a sorted array. As compared to linear,
// binary search is much faster with Time Complexity of O(logN) whereas linear search algorithm works in O(N) time complexity.


// Everytime we are reducing the array by half (log n)
// recursiveBinarySearch(arr, x, 0, arr.length-1)
// For Sorted Array (Recursive)
function recursiveBinarySearch(arr, x, start, end) {

    // Base Condition 
    if (start > end) {
        return { index: false, value: false };
    }

    // Find the middle index 
    let mid = Math.floor((start + end) / 2); 

    if (arr[mid] === x) {
        return { index: mid, value: arr[mid] };
    }

    if (arr[mid] > x) {
        // Left Side, from the start to the one index before midpoint
        return recursiveBinarySearch(arr, x, start, mid - 1);
    } else {
        // Right Side, after midpoint to the end of the array
        return recursiveBinarySearch(arr, x, mid + 1, end); 
    }
}

// ------ Logic for Unsorted --------:
// Let input array arr = [4,5,6,7,8,9,1,2,3]
// number of elements  = 9
// mid index = (0+8)/2 = 4

// [4,5,6,7,8,9,1,2,3]
//         ^
// low   mid  high

// arr = [ 4, 6, 3, 1, 71, 5, 8 ]
// key = 8 (At index 6)
// low = 0
// high = 6 (arr.length - 1)

// We are discarding one half of the array in each call which makes this algorithm O(logN).
function recursiveBinarySearchUnsorted(arr, key, low, high) {
    let mid = (low + high) / 2;

    // key not present
    if (low > high) {
        return - 1;
    }

    // key found
    if (arr[mid] === key) {
        return mid;
    }

    // if left neighbour is smaller or equal to midpoint value
    if (arr[low] <= arr[mid]) {

        // if key is present in left half.
        if (arr[low] <= key && arr[mid] >= key) {
            return recursiveBinarySearchUnsorted(arr, key, low, mid - 1);
        } // if key is not present in left half..search right half.
        else {
            return recursiveBinarySearchUnsorted(arr, key, mid + 1, high);
        }
            
    } else {

        // if key is present in left half.
        if (arr[mid] <= key && arr[high] >= key) {
            return recursiveBinarySearchUnsorted(arr, key, mid + 1, high);
        } // if key is not present in left half..search right half.
        else {
            return recursiveBinarySearchUnsorted(arr, key, low, mid - 1);
        }

    }
}

module.exports = { recursiveBinarySearch, recursiveBinarySearchUnsorted };