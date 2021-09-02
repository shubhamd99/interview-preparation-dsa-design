// Given two strings, determine if they share a common substring. A substring may be as small as one character.
// For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.

// Input
// 2
// hello
// world
// hi
// world

// Ouput
// YES
// NO

// We have p = 2 pairs to check:
// s1 = "hello", s2 = "world". The substrings "o" and "l" are common to both strings.
// a = "hi", b = "world". s1 and s2 share no common substrings.

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let result = "NO";
    
    for (let char of s2.toLowerCase()) {
        if (s1.indexOf(char) !== -1) {
            result = "YES";
            break;
        }
    }
    
    return result;
}

// Complete the twoStrings function below. (Slower)
function twoStrings(s1, s2) {
    const aChar = s1.toLowerCase().split("");

    let result = "NO";
    
    for (let char of s2.toLowerCase()) {
        if (aChar.includes(char)) {
            result = "YES";
            break;
        }
    }
    
    return result;
}
