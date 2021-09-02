// Given a list of intervals, remove all intervals that are covered by another interval in the list.
// Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
// After doing so, return the number of remaining intervals.

// Greedy | time O(n log n) | space O(log n)
// time: O(n log n)
// space: O(log n)

// [[1,4],[3,6],[2,8]]
function removeCoveredIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]); // [ [ 1, 4 ], [ 2, 8 ], [ 3, 6 ] ]
   
    let prevEnd = 0
    let count = 0

    for(let i of intervals){
        const end = i[1]
        // swapping
        if(end > prevEnd){
            count++
            prevEnd = end
        }
    }
    return count
};

module.exports = removeCoveredIntervals;