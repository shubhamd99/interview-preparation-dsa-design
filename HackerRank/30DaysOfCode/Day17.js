// Day 17: More Exceptions

// Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and returns the integer result of p to the power n.
// If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.

// Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

//Write your code here
// Answer
function Calculator() {

    this.power = function(n, p) {
        try {
            if (n >= 0 && p >= 0) {
                return n ** p;
            } else {
                throw 'n and p should be non-negative';
            }
        } catch (error) {
            return error;
        }
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}