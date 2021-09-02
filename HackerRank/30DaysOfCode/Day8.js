// Day 8: Dictionaries and Maps

// The first line contains an integer, n, denoting the number of entries in the phone book. 
// Each of the n subsequent lines describes an entry in the form of 2 space-separated values on a single line.
// The first value is a friend's name, and the second value is an 8-digit phone number.
// After the n lines of phone book entries, there are an unknown number of lines of queries.
// Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

// Note: Names consist of lowercase English alphabetic letters and are first names only.

// Input
// 3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry

// Output
// sam=99912222
// Not found
// harry=12299933

function processData(input) {
    //Enter your code here
    input = input.split('\n'); //Input of "sam 99912222" is split into "sam" "99912222" etc
    var n = parseInt(input[0]); //parseInt-An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned. //"3" is the first thing in input so we get out "3" as number of entries (n).
    var phoneBook = [];
     
    //Add values to the phoneBook dictionary.
    for (var i = 0; i < n; i++){
        var newinput = input[i+1];
        newinput = newinput.split(' ');
        phoneBook[newinput[0]] = newinput[1];
    } //[ sam: '99912222', tom: '11122222', harry: '12299933' ]
     
    // Check if values are in dictionary.
    for (var i = n+1; i < input.length; i++){
        var num = (phoneBook[input[i]]);
        if (num !== undefined) {
            console.log(input[i]+'='+num);
        } else {
            console.log('Not found');
        }
    }
} 

