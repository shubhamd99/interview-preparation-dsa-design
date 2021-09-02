// Day 6: Let's Review

//Given a string, S, of length N that is indexed from 0 to N - 1,
// print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line

// Input
// 2
// Hacker
// Rank

// Output
// Hce akr
// Rn ak

// Example
// S = Hacker
// S[0] = H
// S[1] = a
// S[2] = c
// S[3] = k
// S[4] = e
// S[5] = r

// 0,2,4 are even
// 1,3,5 are odd

function processData(input) {
    let str = "";

    const strArr = input.split("\n").filter(s => isNaN(s));
    // console.log("strArr", strArr);

    strArr.forEach((st, i) => {
        // console.log("strArr[i]", st)
        let even = "";
        let odd = "";

        st.split("").forEach((s, index) => {
            // console.log("strArr[i][index]", s)
            if (index % 2) {
                odd += s;
            } else {
                even += s;
            }
        });

        str += even + " " + odd + "\n";
    })

    console.log(str);
    return str;
} 
