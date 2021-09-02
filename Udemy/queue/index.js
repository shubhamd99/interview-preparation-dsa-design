// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        // The unshift() method adds new items to the beginning of an array, and returns the new length.
        this.data.unshift(record);
    }

    remove() {
        // The pop() method removes the last element of an array, and returns that element.
        return this.data.pop();
    }
}

module.exports = Queue;