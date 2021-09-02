// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative solution
function pyramid2(n) {
    const midpoint = Math.floor((2 * n - 1) / 2); // n = 2 --> 2 * 2 - 1 / 2 = Math.floor(1.5) = 1

    for (let row = 0; row < n; row++) {
        let level = '';

        // n = 2 --> 2 * 2 - 1 = 3 (twice the value of n minus 1)
        for (let column = 0; column < 2 * n - 1; column++) {
            // 1 - 0 <= 0 && 1 + 0 >= 0
            // 1 - 0 <= 1 && 1 + 0 >= 1 --> true
            // 1 - 0 <= 2 && 1 + 0 >= 2
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// recursive solution
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1); // start new row
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;