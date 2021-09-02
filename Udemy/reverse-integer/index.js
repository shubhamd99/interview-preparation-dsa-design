// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n){
    let digit = 0;
    let result = 0;

    while (n){
        digit = n % 10                  //  Get last digit. Ex. 123 -> 123/10 → 12.3 → 3
        result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
        n = n / 10 | 0                      //  Remove last digit. Ex. 123 → 12.3 → 12
    }  
  
    return result;
}

function reverseInt2(n) {
    const reversed = n.toString().split('').reverse().join('');
    // Math.sign(-5) --> -1
    // Math.sign(5) --> 1
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;