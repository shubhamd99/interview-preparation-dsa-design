// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly
// steps steps, for every step it was noted if it was an uphill,U , or a downhill, D step.
// Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude.
// We define the following terms:

// 1. A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level
//    and ending with a step down to sea level.
// 2. A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level
//    and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// steps = 8 path = [D D U U U U D D]
// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high.
// Finally, the hiker returns to sea level and ends the hike.

function countingValleys(steps, path) {
    // Write your code here
    let upsDowns = 0;
    let prevUpDonwsValue = 0;

    let numOfValleysHiked = 0;

    for (let i = 0; i < steps; i++) {

        prevUpDonwsValue = upsDowns;

        // Step Down
        if (path[i] === 'D') {
            upsDowns--;

        // Step Up
        } else if (path[i] === 'U') {
            upsDowns++;
        }

        // Valley ends with Step UP, So previous value should be < 0 (D) and current value should be zero (sea level)
        if (prevUpDonwsValue !== upsDowns && (upsDowns === 0 && prevUpDonwsValue < 0)) {
            numOfValleysHiked++;
        }

        //     __ (zero sea level) -> correct (valley)
        //   /
        // /

        //  \
        //   \
        //     __ (zero sea level) -> wrong (mountain, not valley)
    }

    return numOfValleysHiked;
}



// Second Example
function countingValleys(n, s) {
    // Write your code here
    let e= 0;
    let travel = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === "D") {
            --e;
        } else if (s[i] === "U") {
            if (++e === 0) travel++;
        }
    }
    return travel;
}
