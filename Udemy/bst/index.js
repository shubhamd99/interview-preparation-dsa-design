// Binary Search Tree is a node-based binary tree data structure which has the following properties:

// 1. The left subtree of a node contains only nodes with keys lesser than the node’s key.
// 2. The right subtree of a node contains only nodes with keys greater than the node’s key.
// 3.  The left and right subtree each must also be a binary search tree.

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.

// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.

// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        // If there's already a left node
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        // If there's already a right node
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    contains(data) {
        if (this.data === data) {
            return this;
        }

        // Recursive method
        if (data > this.data && this.right) {
            return this.right.contains(data);
        } else if (data < this.data && this.left) {
            return this.left.contains(data);
        }

        return null;
    }
}

module.exports = Node;