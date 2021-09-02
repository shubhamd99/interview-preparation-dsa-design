// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

// For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac,
// the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.


// --------- Logic -------

// n = 100
// s = 'abcaca'

// count(abcaca, 6) --> abcaca (three a)
// 16
// count(abcaca, 4) --> abca (two a)

// 3 * 16 + 2
// Result = 40

// --------- Logic -------

// What is mod?
// Example: 13 / 5 ---> quotient is 2 and remainder is 3
// 13 mod 5 = 3


// n = 10
// s = 'abcac'
function repeatedString(s, n) { //

    const countAs = (str, ln) => {
        let count = 0;
        for (let i = 0; i < ln; i++) {
            if (str[i] === 'a') {
                count++;
            }
        }
        return count;
    }

    // parseInt second parameter - Optional. A number (from 2 to 36) that represents the numeral system to be used

    const count = countAs(s, s.length); // 2
    const factor = parseInt(n / s.length, 10); // 2
    const rem = countAs(s, n % s.length); // 0

    // "a" count of full string * number of string repeats + "a" count of last string.
    const result =  count * factor + rem;

    // abcacabcac -> four a's
    return result;
}


// Ex. n = 100
// s = 'abcacabcac'
function repeatedString2(s, n) { // Slow
    let infiniteString = s;
    let countOfA = 0;
    
    while (infiniteString.length !== n) {
        // characters left for the infiniteString to become the length of n
        let lengthLeft = n - infiniteString.length; 
        infiniteString += s.substring(0, lengthLeft);
    }
    
    for (let char of infiniteString) {
      if (char === 'a') {
        countOfA++;
      }
    }
    
    console.log(infiniteString.length); // 100
    
    return countOfA;

}

