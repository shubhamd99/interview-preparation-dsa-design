// A linked list is a linear collection of data elements whose order is not given by their physical placement in memory.
// Instead, each element points to the next.
// It is a data structure consisting of a collection of nodes which together represent a sequence.

// In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the

class Node {
    constructor(data, next = null) {
      this.val = data;
      this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
    
        while (node) {
          counter++;
          node = node.next;
        }
    
        return counter;
    }

    print() {
        let node = this.head;
        const arr = [];
    
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
    
        console.log('nodeList', arr);
        return arr;
    }

    getFirst() {
        return this.head;
    }

    clear() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
