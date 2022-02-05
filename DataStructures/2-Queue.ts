// A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.

// Queues, as opposed to stacks, are first in first out (FIFO), so whatever goes in first comes out first as well

// Types of Queue
// 1. Simple Queue
// 2. Priority Queue
// 3. Circlular Queue
// 4. Doubled ended queue (Dequeue)

// APIs:
// 1. add() Pushes an item o the baco of the queue
// 2. remove() Removes an item from the start of the queue
// 3. peek() Shows the last item added to the queue
// 4. front() Returns the item at the front of the queue
// 5. clear() Empties the queue
// 6. size() Gets the current size of the queue

class Queue<T> {
    private qKey = {};
    private items: WeakMap<object, T[]> = new WeakMap();

    constructor() {
        this.items.set(this.qKey, []);
    }
    add(element: T) {
        let queue = this.items.get(this.qKey);
        queue.push(element);
    }
    remove(): T {
        let queue = this.items.get(this.qKey);
        return queue.shift();
    }
    peek(): T {
        let queue = this.items.get(this.qKey);
        return queue[queue.length - 1];
    }
    front(): T {
        let queue = this.items.get(this.qKey);
        return queue[0];
    }
    clear(): void {
        this.items.set(this.qKey, []);
    }
    size(): number {
        return this.items.get(this.qKey).length;
    }
}

interface Person {
    name: string;
    age: number;
}

var simpleQueue: Queue<Person> = new Queue<Person>();

