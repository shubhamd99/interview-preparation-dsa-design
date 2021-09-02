// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        vowels.includes(char) && count ++ ;
    }

    return count;
}

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);
    matches ? matches.length : 0;

    return count;
}

module.exports = vowels;