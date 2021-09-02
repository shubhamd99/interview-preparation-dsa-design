// Day 19: Interfaces

// The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method
// are provided for you in the editor below.

// Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface.
// The implementation for the divisorSum(n) method must return the sum of all divisors of n.

class AdvancedArithmetic {
    divisor(n) {
      return n || 0;
    };
}
  
class Calculator extends AdvancedArithmetic {
    constructor(props) {
      super(props);
  
      this.divisor = this.divisorSum.bind(this);
    }
  
    // sum of all divisors of n.
    // n = 6
    divisorSum(n) {
        // [0,0,0,0...]
        return Array(n).fill(0).reduce((target, item, index) => {

            if (!(n % (index + 1))) { // zero
                target += (index + 1)
            };
    
            return target; // 12
        }, 0);
    }
}
  
function Solution () {
    const n = 6;
  
    const myCalculator = new Calculator();
  
    let sum = myCalculator.divisor(n);
  
    console.log("I implemented: AdvancedArithmetic\n" + sum); 
}
  
Solution();