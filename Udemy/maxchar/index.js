// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    // console.log("charMap", charMap); // charMap { '1': 6, a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }

    // For-In for actual JS Objects
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar; // char with maximun occurence
}

function maxChar2(str) {
    let charMap = {};
    let result;

    str.split('').reduce((acc, char) => {
        // Increments Map at location charMap[char] unless it does not already exist
        charMap[char] = charMap[char] + 1 || 1;

        // This checks to see if the current passthrough of charMap[char] is greater than or equal to the accumulator, if it is, set the result equal to the current character. If it's not keep the result the same.
        result = charMap[char] >= acc ? char : result;

        // Only increment the accumulator if Map at location charMap[char] is greater than the accumulator. Make sure to return it otherwise it won't increment.
        return acc = charMap[char] > acc ? acc + 1 : acc
    }, 1) // acc = 1

    return result
}

module.exports = maxChar;