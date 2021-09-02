// Day 26: Nested Logic

// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any).
// The fee structure is as follows:
// 1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0)
// 2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos x (the number of days late)
// 3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos x (the number of months late)
// 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

function processData(input) {
    //Enter your code here
    let fine = 0;
    const [actual, expected] = input.split('\n').map(item => {
        const [day, month, year] = item.split(' ').map(Number);

        return { day, month, year };
    });

    (
        actual.year === expected.year &&
        actual.month === expected.month &&
        actual.day > expected.day
    ) && (fine = (actual.day - expected.day) * 15);

    (
        actual.year === expected.year &&
        actual.month > expected.month
    ) && (fine = (actual.month - expected.month) * 500);

    (actual.year > expected.year) && (fine = 10000);

    console.log(fine);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
