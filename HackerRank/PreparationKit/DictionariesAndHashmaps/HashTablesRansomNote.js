// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting.
// He found a magazine and wants to know if he can cut out whole words from it and use them to create an
// untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only
// whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print
// Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// For example, the note is "Attack at dawn". The magazine contains only "attack at dawn".
// The magazine has all the right words, but there's a case mismatch. The answer is No.

// 6 5
// two times three is not four
// two times two is four

// NO

// 6 4
// give me one grand today night
// give one grand today

// YES

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    let magazineMap = {};
    let works = 'Yes';
    
    // Magazin Char Map
    for (let char of magazine) {
        if (magazineMap[char] === undefined) {
            magazineMap[char] = 1;
        } else {
            magazineMap[char]++;
        }
    }
    
    // Loop through the note and compare with magazine object
    for (let i = 0; i < note.length; i++) {
        // Magazin Char Map has the word needed for the note
        if (!magazineMap[note[i]]) { // !(note[i] in magazineMap (alternative code)
            works = 'No';
            break;
        } else {
            // In the Magazin Char Map
            if (magazineMap[note[i]] < 1) { // { "A": 0 }
                works = 'No'
                break;
            }

            // Subtract one from the number of words in dict
            magazineMap[note[i]] = magazineMap[note[i]] - 1; // { "A": 2 }  -> { "A": 1 }
        }
    }
    
    console.log(works);
}
