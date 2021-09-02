// Day 25: Running Time and Complexity

// A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Given a number, n, determine and print whether it's Prime or Not Prime.

// Note: If possible, try to come up with a O(/n) primality algorithm, or see what
// sort of optimizations you come up with for an O(n) algorithm.

// The first line contains an integer, T, the number of test cases. 
// Each of the T subsequent lines contains an integer, n, to be tested for primality.

function processData(input) {
    //Enter your code here
    let result = input.split('\n').slice(1).map(isPrime);

    function isPrime(input, i) {
        let messages = ['Not prime', 'Prime'];

        if (input == 1) { 
            return messages[0];
        }
        if (input == 2) {
            return messages[1];
        }
        if (input % 2 == 0) {
            return messages[0];
        } 
        
        // The Math.sqrt() function returns the square root of a number
        for (i = 3; i <= Math.sqrt(input); i += 2) {
            if (input % i == 0) { 
                return messages[0];
            }
        } 
        return messages[1];
    }

    // -------------- Solution 2 START ----------------
    input.split('\n').slice(1).map((n, i) => {
        console.log(isPrime(n) ? 'Prime' : 'Not prime');
    });

    function isPrime(n) {
        if (n == 1) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }

        return true;
    }
    // -------------- Solution 2 END ----------------

    console.log(result.join("\n"));
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
