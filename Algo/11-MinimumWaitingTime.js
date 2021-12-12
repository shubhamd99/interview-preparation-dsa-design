// queries = [3,2,1,2,6]

// You're given a non empty array of positive integers representing the amounts if time that specific queries take to execute.
// Only one query can be executed at a time, but the queries can be exectuted in any order.

// Execution sequence - 1 sec 2 sec 2 sec 3 sec 6 sec
// 1  2   2     3       6
// 0  1  1+2  1+2+2  1+2+2+3
// 0  1   3     5       8       = 17  (MINIMUM)


// [100] -> 0 waiting time
// [100, 1] -> 100 waiting time

// [6,1]
// [6,1] = 0 + 6 = 6 (wrong answer)
// [1,6] = 0 + 1 = 1 (correct minimum time)
// Small query first


// O(nlogn) time | O(1) space - where n is the number of queries
function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b);

    let totalWaitingTime = 0; // constant space

    for (let idx = 0; idx < queries.length; idx++) {
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1);
        totalWaitingTime += duration * queriesLeft;
    }

    return totalWaitingTime;
}


// Sort - O(nlogn)
// Iterate - O(n)
// Combine - O(nlogn + n) = O(nlogn)

// [1,2,2,3,6]

// [x,2,2,3,6] 
// start with 1
// total = 0
// 4 element left, they all need to wait 1 second
// 4 * 1 = 4
// total = 4

// [x,x,2,3,6]
// now 2
// 3 * 2 = 6
// add it to the total = 10

// .. so on...