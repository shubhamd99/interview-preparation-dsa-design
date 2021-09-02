// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // ehllo  ===  ehllo
    // ahhiow  ===  ahhiow
    // eennoo  ===  oootttwww
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    // The sort() method sorts an array alphabetically:
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// ----------------- Second Way ---------------------------
// Low performance
function anagrams2(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    // Array --> For-Of && Object --> For-In
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};
    
    // A regular expression is an object that describes a pattern of characters.
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { // remove space with RegEx
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap; // { o: 2, n: 2, e: 2, c: 1 }
}

module.exports = anagrams;