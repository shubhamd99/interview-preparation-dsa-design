// Sum up a number until it becomes 1 digit JS
// Subset Sum

// Recursive
function getOneDigit(num) {
    let numToString = String(num);
    let sum = numToString.split("").reduce((acc, cur) => {
        acc += parseInt(cur);
        return acc;
    }, 0);
    return sum >= 10 ? getOneDigit(sum) : sum;
}

module.exports = getOneDigit;