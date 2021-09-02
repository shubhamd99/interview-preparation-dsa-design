// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function findlongestWord(sen) {
    if (sen === '') {
        return sen;
    }

    let stringToArray = sen.split(' ');
    let result = '';

    for (let char of stringToArray) {
        // Regular expression to remove special characters
        let cleanedString = char.replace(/[^\w\s]/gi, '');
        if (result.length < cleanedString.length) {
            result = cleanedString
        }
    }

    console.log(result);
    return result; 
}

module.exports = findlongestWord;