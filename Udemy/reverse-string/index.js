// Given a string, return a new string with reversed

// Reduce method
function reverse(str) {
    return str.split('').reduce((acc, char) => char + acc, '');
}

function reverse2(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

// Easy not recomended
function reverse3(str) {
    return str.split('').reverse().join('');
}

module.exports = reverse;