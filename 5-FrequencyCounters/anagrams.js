// Anagram is  word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

validAnagram('',''); // true
validAnagram('aaz','zza'); // false
validAnagram('anagram','nagaram'); // true
validAnagram('rat','car'); // false
validAnagram('awesome','awesom'); // false
validAnagram('qwerty','qeywrt'); // true
validAnagram('texttwisttime','timetwisttext'); // true

validAnagram2('awesome','awesom'); // false
validAnagram2('texttwisttime','timetwisttext'); // true

// Time Complexity - O(n)
function validAnagram(str1, str2){
    console.log(str1, str2);
    // add whatever parameters you deem necessary - good luck!
    if (str1 === '' && str2 === '') {
        console.log(true);
        return true;
    }
    
    const charMapA = buildCharMap(str1);
    const charMapB = buildCharMap(str2);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        console.log(false);
        return false;
    }

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            console.log(false);
            return false;
        }
    }
    // console.log(charMapA, charMapB)

    console.log(true);
    return true;
}


function validAnagram2(first, second) {
    if (first.length !== second.length) {
        console.log(false);
        return false;
    }

    // Building char map of string first
    const lookup = buildCharMap(first);

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        if (!lookup[letter]) {
            console.log(false);
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    console.log(true);
    return true;

}


function buildCharMap(str) {
    let charMap = {};
    
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    
    return charMap;
}