// TWO BECOME ONE 

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        // First Array --> [shubham, rohan, nayan, sharath, priyanka]
        this.first.push(record);
    }

    remove() {
        while(this.first.peek()) {
            // Second array --> [priyanka, sharath, nayan, rohan, shubham], First Array --> []
            this.second.push(this.first.pop());
        }

        const record = this.second.pop(); // shubham

        while(this.second.peek()) {
            // First array --> [shubham, rohan, nayan, sharath, priyanka], Second Array --> []
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while(this.first.peek()) {
            // Second array --> [priyanka, sharath, nayan, rohan, shubham], First Array --> []
            this.second.push(this.first.pop());
        }

        const record = this.second.peek(); // shubham

        while(this.second.peek()) {
            // First array --> [shubham, rohan, nayan, sharath, priyanka], Second Array --> []
            this.first.push(this.second.pop());
        }

        return record;
    }
}

module.exports = Queue;