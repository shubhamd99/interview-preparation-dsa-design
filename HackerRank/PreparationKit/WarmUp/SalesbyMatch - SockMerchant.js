// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks
// with matching colors there are.
// For example, there are n = 7 socks with colors ar = [1, 2, 1, 2, 1, 3, 2] .There is one pair of color 1 and one of 2 color .
// There are three odd socks left, one of each color. The number of pairs is 2.

// Input
// 9
// 10 20 20 10 10 30 50 10 20

const sockMerchant = (n, ar) => {
    let sorted = ar.sort((a,b) => a - b);  // 10 10 20 20 30 50...
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}


const ar = [1, 2, 1, 2, 1, 3, 2];
const n = 7;
let result = sockMerchant(n, ar);