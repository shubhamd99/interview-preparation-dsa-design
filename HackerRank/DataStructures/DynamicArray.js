// Create a list, seqList, of  empty sequences, where each sequence is indexed from 0 to n - 1.
// The elements within each of the n sequences also use 0-indexing.
// Create an integer, lastAnswer, and initialize it to 0.

// There are 2 types of queries that can be performed on the list of sequences:

// 1. Query: 1 x y
  // a. Find the sequence, seq, at index ((x ^ lastAnswer) % n) in seqList.
  // b. Append integer y to sequence seq.

// 1. Query: 2 x y
  // a. Find the sequence, seq, at index ((x ^ lastAnswer) % n) in seqList.
  // b. Find the value of element y % size in seq (where size is the size of the seq array), and assign it to lastAnswer
  // c. Print the new value of lastAnswer on a new line

function dynamicArray(n, queries) {
    // Write your code here

    // n = 2
    // queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]

    let lastAnswer = 0;
    let S = [];
    let lastAnswersResultArray = [];

    for (let i = 0; i < n; i++) {
        S[i] = [];
    }

    for (let values of queries) {
        const [q, x, y] = values;
        const seq = (x ^ lastAnswer) % n;

        switch (q) {
            case 1:
                S[seq].push(y);
                break;
            case 2:
                const size = S[seq].length;
                const index = y % size;
                lastAnswer = S[seq][index];
                lastAnswersResultArray.push(lastAnswer);
                break;
        }
    }

    console.log("S: ", S); // [ [ 5, 3 ], [ 7 ] ]
    console.log("lastAnswersResultArray", lastAnswersResultArray); // [7,3]
    return lastAnswersResultArray;

}
