// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    // A constructor is a function that initializes an object.
    constructor() {
        this.data = [];
    }

    push(record) {
        // The push() method adds new items to the end of an array, and returns the new length.
        this.data.push(record);
    }

    pop() {
        // The pop() method removes the last element of an array, and returns that element.
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;