// Find Square Root with Binary Search

// number = 16
// low = 0
// high = 16
// answer: 4 --> 4 x 4 = 16
// log n
function findSquareRoot(number, low_bound, high_bound) {

    let mid = (low_bound + high_bound) / 2; // 8
    let aproximation = mid * mid; // 16

    if (Math.abs(number - aproximation) < 0.01) {
        return mid;
    }

    if (aproximation > number) {
        high_bound = mid;
    } else {
        low_bound = mid;
    }

    return findSquareRoot(number, low_bound, high_bound);
}

/*
    sqrt(8)
    (0 + 8) / 2 = 4
    4 * 4 = 16
    (0 + 4) / 2 = 2
    2 * 2 = 4
    (2 + 4) / 2 = 3
    3 * 3 = 9
    (2 + 3) / 2 = 2.5
    2.5 * 2.5 = 6.25
...
*/

function sqrt(number) {
    if (number < 0) {
        return -1;
    }
    
    return findSquareRoot(number, 0, number);
}


module.exports = { sqrt };