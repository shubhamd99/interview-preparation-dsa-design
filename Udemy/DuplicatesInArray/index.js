// Find all duplicates in an array in linear time (Solution 1)
// This algorithm runs in O(n) time because it only needs to loop through the array once. 

// Alpha Numeric Array (Fastest)
function removeDuplicates(arr) {
    return arr.filter((item, pos) => {
        return arr.indexOf(item) !== pos;
    })
}

// Alpha Numeric Array
function* removeDuplicatesGenerators(a) {
    let seen = new Set();

    for (let x of a) {
        if (!seen.has(x)) {
            seen.add(x);
            yield x;
        }
    }
}

// Alpha Numeric Array
function removeDuplicates3(arr) {
    let hashTable = {}; // { 2: true, 1: true, ... }

    for (let char of arr) {
        if (hashTable[String(char)] === undefined) {
            hashTable[String(char)] = 1;
        } else {
            hashTable[String(char)]++;
        }
    }

    const extractDuplicates = Object.keys(hashTable).filter(k => hashTable[k] !== 1);
    const final = extractDuplicates.map(n => isNaN(n) ? n : Number(n)); // "2" -> 2,  "4" -> 4,  "a" -> "a"

    return final;
}

// Solution 2
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN

// Numbers Only
function removeDuplicates4(arr) {
    let dups = [];

    for (let i = 0; i < arr.length; i++) {
      
      // get element in array
      let el = arr[Math.abs(arr[i])];
      
      // element in array is positive so make it negative
      if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
      
      // special case if element is zero
      // we set the value at this index to -arr.size as not to
      // mix this number up with the others because we know the
      // numbers are all in the range of 0 to n-1
      else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
      
      // element is negative so it is a duplicate
      else { 
        if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
        else { dups.push(Math.abs(arr[i])); }
      }
      
    }
    // console.log(dups)
    return dups;
}

module.exports = {removeDuplicates, removeDuplicatesGenerators};