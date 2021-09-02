// Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string.
// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

// For example s = mom, the list of all anagrammatic pairs is [m,m], [mo,om] at positions [[0], [2]], [[0,1], [1,2]]
// respectively.

// The problem can be divided in two parts
// Part 1 : how to calculate number of pairs from a set of elements
// Part 2 : given one string , extract all the substrings inside the main string and find calculate the
// number of pairs of strings that are anagrams one of the other.


// Part1
// The number of the pairs from a set of n elements can be calculated with the
// formula npairs = n! / (2 * (n - 2)!) = (n * (n - 1)) / 2, below one function to calculate the number of pairs:
// The countPairs function will return the numbers of pairs from a set of n elements and it is used in the part2.
function countPairs(n) {
    return (n * (n - 1)) / 2;
}

// Part2
// Complete the sherlockAndAnagrams function below.
// To store anagrams you can use a Map structure storing anagrams and their occurrences ,
// so if you have for example two strings ab and ba the map['ab'] will be 2.
function sherlockAndAnagrams(s) {

    const map = new Map();
    const n = s.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const sub = s.substring(i, j + 1);
            const key = sub.split('').sort().join('');
            if (map.has(key)) {
               map.set(key, map.get(key) + 1); 
            } else {
               map.set(key, 1);
            }
        }
    }  //done , substrings stored in the map

    //Check all map values and calculate number of pairs 
    //for every key with an associate value > 1
    let result = 0;
    for (const [key, value] of map) {
        if (value > 1) {
         result += countPairs(value);    
        }
    }
    return result;
}

// Without Javascript built-in Map
function sherlockAndAnagrams2(s) {

    const map = {}; // char map --> { a: 2, ab: 2, abb: 2, aabb: 1, b: 2, bb: 1 }

    const n = s.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const sub = s.substring(i, j + 1);
            const key = sub.split('').sort().join(''); // ba -> ab

            if (map[key]) {
               map[key] = map[key] + 1; 
            } else {
               map[key] = 1;
            }
        }
    }  // done , substrings stored in the map

    // Check all map values and calculate number of pairs 
    // for every key with an associate value > 1
    let result = 0;

    for (const obj in map) {
        const value = map[obj];
        if (value > 1) {
         result += countPairs(value);    
        }
    }
    return result;
}

console.log(sherlockAndAnagrams2("abba")); // 4
console.log(sherlockAndAnagrams2("abcd")); // 0
