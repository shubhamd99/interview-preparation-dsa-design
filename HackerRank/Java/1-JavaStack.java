import java.util.*;
import java.util.regex.*;


// Write your code here. DO NOT use an access modifier in your class declaration.

import java.util.*;
import java.util.regex.*;


// Write your code here. DO NOT use an access modifier in your class declaration.

class Parser {
    /* Create HashMap to match opening brackets with closing brackets */
    static boolean isBalanced(String parentheses) {
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < parentheses.length(); i++) {
            char ch = parentheses.charAt(i);
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else if (stack.empty()) {
                return false;
            } else {
                char top = stack.pop();
                if ((top == '(' && ch != ')') || (top == '[' && ch != ']')
                        || (top == '{' && ch != '}')) {
                    return false;
                }
            }
        }
        return stack.empty();
    }

}

class Solution {
	
	public static void main(String[] args) {
		Parser parser = new Parser();
        
		Scanner in = new Scanner(System.in);

		while (in.hasNext()) {
			System.out.println(parser.isBalanced(in.next()));
		}
        
		in.close();
	}
}

