// Day 19: Interfaces

// The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method
// are provided for you in the editor below.

// Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface.
// The implementation for the divisorSum(n) method must return the sum of all divisors of n.

import java.io.*;
import java.util.*;

interface AdvancedArithmetic{
   int divisorSum(int n);
}
class Calculator implements AdvancedArithmetic {
    public int divisorSum(int n) {
        int sum = n;
        for (int i = 1; i <= n/2; i++) {
            if (n % i == 0)
                sum += i;
        }
        return sum;
    }
}

class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        scan.close();
        
      	AdvancedArithmetic myCalculator = new Calculator(); 
        int sum = myCalculator.divisorSum(n);
        System.out.println("I implemented: " + myCalculator.getClass().getInterfaces()[0].getName() );
        System.out.println(sum);
    }
}