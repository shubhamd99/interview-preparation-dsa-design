// Day 14: Scope

// The absolute difference between two integers, n and b, is written as |a - b|.
// The maximum absolute difference between two integers in a set of positive integers, elements,
// is the largest absolute difference between any two integers in elements.
// The Difference class is started for you in the editor. It has a private integer array (elements) for storing N non-negative integers,
// and a public integer (maximumDifference) for storing the maximum absolute difference.


import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
    private int[] elements;
    public int maximumDifference;


    // Answer
    // Add your code here
    public Difference(int []elements) {
        this.elements = elements;
    }

    public void computeDifference() {
        Arrays.sort(elements);
        maximumDifference= elements[elements.length - 1] - elements[0];
    }

}


public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}