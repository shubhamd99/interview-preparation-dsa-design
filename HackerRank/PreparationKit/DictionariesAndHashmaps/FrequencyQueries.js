// You are given q queries. Each query is of the form two integers described below: 
// 1x -  : Insert x in your data structure. 
// 2y -  : Delete one occurence of y from your data structure, if present. 
// 3z - : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0. 

// The queries are given in the form of a 2-D array queries of size q where queries[i][0]
// contains the operation, and queries[i][0] contains the data element. For example, you are given array 

// queries = [(1,1), (2,2), (3,2), (1,1), (1,1), (2,1), (3,2)]. The results of each operation are:

// Operation   Array   Output
// (1,1)       [1]
// (2,2)       [1]
// (3,2)                   0
// (1,1)       [1,1]
// (1,1)       [1,1,1]
// (2,1)       [1,1]
// (3,2)                   1

// Return an array with the output: [0,1].


// Complete the freqQuery function below. (Little Slow, 1 test failed out of all)
function freqQuery(queries) { // [ [1,1], [2,2], [3,2], [1,1], [1,1], [2,1], [3,2] ]

    const frequencies = []; // [ <1 empty item>, 2 ]
    const frequencyTracker = []; //  [ <1 empty item>, 0, 1, 0, undefined: 1 ]
    const result = []; // [ 0, 1 ]

    for (const query of queries) {
        const action = query[0];
        const value = query[1];
        let index;

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? --frequencyTracker[index] : null;
        }

        if (action === 1) {
            typeof frequencies[value] === 'undefined' ? frequencies[value] = 1 : ++frequencies[value];
        }

        if (action === 2 && frequencies[value]) {
            --frequencies[value];
        }

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? ++frequencyTracker[index] : frequencyTracker[index] = 1;
        }

        if (action === 3) {
            result.push(frequencyTracker[value] > 0 ? 1 : 0);
        }
    }

    return result;

}

console.log(freqQuery( [ [1,1], [2,2], [3,2], [1,1], [1,1], [2,1], [3,2] ] ));

// Complete the freqQuery function below. (Little Slow, 1 test failed out of all)
function freqQuery2(queries) {
    let dataStructure = [];
    let charMap = {};
    let output = [];

    for (let i = 0; i < queries.length; i++) {
        const [query, data] = queries[i];
        
        // Insert x in your data structure. 
        if (query === 1) {
            dataStructure.push(data);

            if (charMap[data] === undefined) {
                charMap[data] = 1;
            } else {
                charMap[data]++;
            }
            
        // Delete one occurence of y from your data structure, if present. 
        } else if (query === 2) {
            const indexOfData = dataStructure.indexOf(data);
            if (indexOfData >= 0) {
                dataStructure.splice(indexOfData, 1);
                
                if (charMap[data]) {
                    if (charMap[data] > 0) {
                        charMap[data] = charMap[data] - 1;
                    } else {
                        delete charMap[data];
                    }
                }
            }
        
        // Check if any integer is present whose frequency is exactly z.
        // If yes, print 1 else 0. 
        } else if (query === 3) {
            const occurences = Object.values(charMap);
            if (occurences.indexOf(data) !== -1) {
                output.push(1);
            } else {
                output.push(0);
            }
        }
            
    }

    return output;
}
