// A queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence.

// Queues, as opposed to stacks, are first in first out (FIFO), so whatever goes in first comes out first as well

// Types of Queue
// 1. Simple Queue
// 2. Priority Queue
// 3. Circlular Queue
// 4. Doubled ended queue (Dequeue)

// APIs:
// 1. add() Pushes an item to the back of the queue
// 2. remove() Removes an item from the start of the queue
// 3. peek() Shows the last item added to the queue
// 4. front() Returns the item at the front of the queue
// 5. clear() Empties the queue
// 6. size() Gets the current size of the queue

// A priority queue is operationally similar to the simple queues, that is, they support the same API, but there is a small addition to the data that they hold.
// Along with the element (your data), they can also persist a priority, which is just a numerical value indicating the priority of your element in the queue.

interface Priority {
    priority: number;
}

class PriorityQueue<T extends Priority> {
    private qKey = {};
    private items: WeakMap<object, T[]> = new WeakMap();

    constructor() {
        this.items.set(this.qKey, []);
    }
    add(newEl: T) {
        let queue = this.items.get(this.qKey);
        let newElPosition = queue.length;

        if (!queue.length) {
            queue.push(newEl);
            return;
        }

        for (let [i, v] of queue.entries()) {
            if (newEl.priority > v.priority) {
                newElPosition = i;
                break;
            }
        }
        queue.splice(newElPosition, 0, newEl);
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
    priority: number;
}

var priorityQueue: PriorityQueue<Person> = new PriorityQueue<Person>();
priorityQueue.add({
    name: 'Shubham Dhage',
    age: 10,
    priority: 1,
});

