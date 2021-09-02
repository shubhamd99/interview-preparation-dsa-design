// Factorial --> 4 = 4 * 3 * 2 * 1 => 24
function FirstFactorial(num) { 
    if (num !== 1) {
       num *= FirstFactorial(num - 1);
    } else {
        num = 1;
    }
    // console.log(num);
    return num;       
}

module.exports = FirstFactorial;