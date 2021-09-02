// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1]; // index - 1, because array starts from zero
    });
}

function palindrome2(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

module.exports = palindrome;