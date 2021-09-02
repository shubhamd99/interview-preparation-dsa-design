// Move All X from the string to its end
// i.e., abexexdexed return abeedeedxxx

// Recursive Function
function moveAllXToEnd(str, count = 0) {

    if (str.length <= 1) {
        return str;
    }

    // console.log(str.length, count);
    if (str.length === count) {
        return str;
    }

    if (str[count] === 'x') {
        // Removing the x and putting the '' empty string
        let splicedString = str.substr(0, count) + '' + str.substr(count + 1);
        // Adding back the 'x' to the end of the string
        splicedString += str[count];
        return moveAllXToEnd(splicedString, count + 1);
    }

    return moveAllXToEnd(str, count + 1);
}


// Short
function moveAllXToEnd2(str, char = 'x') {
    if (str.length <= 1) {
      return str;
    }
    return str[0] === char
      ? moveAllXToEnd2(str.slice(1)) + char
      : str[0] + moveAllXToEnd2(str.slice(1));
}

module.exports = moveAllXToEnd;