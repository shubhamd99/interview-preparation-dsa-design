// Day 27: Testing

// This problem is all about unit testing.
// Your company needs a function that meets the following requirements:

// 1. For a given array of n integers, the function returns the index of the element with the minimum value in the array.
// If there is more than one element with the minimum value, the returned index should be the smallest one.

// 2. If an empty array is passed to the function, it should raise an Exception.

// Note: The arrays are indexed from 0.

// A colleague has written that function, and your task is to design 3 separated unit tests,
// testing if the function behaves correctly. The implementation in Python is listed below
// (Implementations in other languages can be found in the code template):

// def minimum_index(seq):
//     if len(seq) == 0:
//         raise ValueError("Cannot get the minimum value index from an empty sequence")
//     min_idx = 0
//     for i in range(1, len(seq)):
//         if a[i] < a[min_idx]:
//             min_idx = i
//     return min_idx

import java.util.*;

public class Solution {

    public static int minimum_index(int[] seq) {
        if (seq.length == 0) {
            throw new IllegalArgumentException("Cannot get the minimum value index from an empty sequence");
        }
        int min_idx = 0;
        for (int i = 1; i < seq.length; ++i) {
            if (seq[i] < seq[min_idx]) {
                min_idx = i;
            }
        }
        return min_idx;
    }

    static class TestDataEmptyArray {
        public static int[] get_array() {
            // complete this function
            return new int[0];
        }
    }

    static class TestDataUniqueValues {
        public static int[] get_array() {
            // complete this function
            return new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        }

        public static int get_expected_result() {
            // complete this function
            return 0;
        }
    }

    static class TestDataExactlyTwoDifferentMinimums {
        public static int[] get_array() {
            // complete this function
            return new int[] { 1, 2, 3, 0, 4, 56, 0, 7, 8, 9 };
        }

        public static int get_expected_result() {
            // complete this function
            return 3;
        }
    }

    
	public static void TestWithEmptyArray() {
        try {
            int[] seq = TestDataEmptyArray.get_array();
            int result = minimum_index(seq);
        } catch (IllegalArgumentException e) {
            return;
        }
        throw new AssertionError("Exception wasn't thrown as expected");
    }

    public static void TestWithUniqueValues() {
        int[] seq = TestDataUniqueValues.get_array();
        if (seq.length < 2) {
            throw new AssertionError("less than 2 elements in the array");
        }

        Integer[] tmp = new Integer[seq.length];
        for (int i = 0; i < seq.length; ++i) {
            tmp[i] = Integer.valueOf(seq[i]);
        }
        if (!((new LinkedHashSet<Integer>(Arrays.asList(tmp))).size() == seq.length)) {
            throw new AssertionError("not all values are unique");
        }

        int expected_result = TestDataUniqueValues.get_expected_result();
        int result = minimum_index(seq);
        if (result != expected_result) {
            throw new AssertionError("result is different than the expected result");
        }
    }

    public static void TestWithExactlyTwoDifferentMinimums() {
        int[] seq = TestDataExactlyTwoDifferentMinimums.get_array();
        if (seq.length < 2) {
            throw new AssertionError("less than 2 elements in the array");
        }

        int[] tmp = seq.clone();
        Arrays.sort(tmp);
        if (!(tmp[0] == tmp[1] && (tmp.length == 2 || tmp[1] < tmp[2]))) {
            throw new AssertionError("there are not exactly two minimums in the array");
        }

        int expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result();
        int result = minimum_index(seq);
        if (result != expected_result) {
            throw new AssertionError("result is different than the expected result");
        }
    }

    public static void main(String[] args) {
        TestWithEmptyArray();
        TestWithUniqueValues();
        TestWithExactlyTwoDifferentMinimums();
        System.out.println("OK");
    }
}
