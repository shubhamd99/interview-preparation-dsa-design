// Day 5: Loops

// Task
//Given an integer, n, print its first 10 multiples. Each multiple n X 1 (where 1 <= i <= 10) should be printed on
// a new line in the form: n x i = result.

// Input
// 2

// Output
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20


function main() {
    const n = parseInt(readLine(), 10);
    for (let i = 1; i <= 10; i++) {
        const multiple = n * i;
        const str = `${n} x ${i} = ${multiple}\n`
        process.stdout.write(str);
    }
}