// SUM OF ALL ARGUMENTS IN A FUNCTION
// Recursevily Currying Example

function sum(a) {
    return function (b) {
        return b ? sum(a + b) : a;
    }
}

// console.log(sum(1)(2)(3)());

// [ sum(1)(2) ](3)(4)()
// [ sum(3)(3) ](4)()
// [ sum(6)(4) ]()
// 10

module.exports = sum;