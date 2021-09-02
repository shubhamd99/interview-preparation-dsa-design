// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride!
// There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue.
// Initial positions increment by 1 from 1 at the front of the line to n at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions
// they still wear the same sticker denoting their original places in line. One person can bribe at most two others.
// For example, if n = 8, and Person 5 bribes Person 4, the queue will look like this: 1,2,3,4,5,6,7,8

// Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place
// to get the queue into its current state!

// The first line contains an integer t, the number of test cases.
// Each of the next t pairs of lines are as follows: 
// - The first line contains an integer t, the number of people in the queue 
// - The second line has n space-separated integers describing the final state of the queue.


// Input 
// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

// Output
// 3
// Too chaotic

// 1,2,3,4,5,6,7,8
// 1,2,3,5,4,6,7,8 -> 1
// 1,2,5,3,4,6,7,8 -> 2
// 1,2,5,3,4,7,6,8 -> 3
// 1,2,5,3,7,4,6,8 -> 4
// 1,2,5,3,7,4,8,6 -> 5
// 1,2,5,3,7,8,4,6 -> 6
// 1,2,5,3,7,8,6,4 -> 7


// Complete the minimumBribes function below.
function minimumBribes(q) {

    const getBribeCount = (arr) => {
        let numOfBribes = 0;
   
        for (let [index, value] of arr.entries()) {
            // current index value minus actual index value
            const subtract = value - (index + 1);
            if (subtract > 2) {
                return "Too chaotic";
            }

            // Reduce the inner loops iteration count.
            // This brings the solution down from 𝑂(𝑛2) to near 𝑂(𝑛)

            // Math.max(0, -1) --> It will remove negative numbers
            // One person can bribe at most two others -> arr[index] - 2

            for (let j = Math.max(0, arr[index] - 2); j < index; j++) {
                if (arr[j] > arr[index]) numOfBribes++;
            }
            
        }

        return numOfBribes;
    }

    console.log(getBribeCount(q));
}
