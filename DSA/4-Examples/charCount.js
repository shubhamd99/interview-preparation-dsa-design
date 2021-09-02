// Write a function that takes in a string and returns count of each character in a string.

charCount("aabbckkss");
charCount("hello") // { h: 1, e: 1, l: 2, o: 1 }
charCount("aaa") // { a: 4 }

// Edge cases Input
charCount("My phone number is 182763");
charCount2("My phone number is 182763");
charCount("Hello hhi");
charCount("");
charCount(null);

function charCount(str) {
    let result = {};

    if (!str) {
        return result;
    }

    for (let char of str.toLowerCase()) {
        if (/[a-z0-9]/.test(char)) { // Only alphabets and numbers
            // if (result[char] > 0) {
            //     result[char]++ || 1;
            // } else {
            //     result[char] = 1;
            // }

            result[char] = ++result[char] || 1;
        }
    }

    console.log("result: ", result);
    return result;
}

// More Performance
function charCount2(str) {
    let result = {};

    if (!str) {
        return result;
    }

    for (let char of str.toLowerCase()) {
        if (isAlphaNumeric(char)) { // Only alphabets and numbers
            result[char] = ++result[char] || 1;
        }
    }

    console.log("result2: ", result);
    return result;
}


function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // Numeric (0-9)
        !(code > 64 && code < 91) && // Upper case (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
    ) { // Only alphabets and numbers

        return false;
    }

    return true;
}