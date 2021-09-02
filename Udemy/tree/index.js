// A tree is a widely used abstract data type that simulates a hierarchical tree structure,
// with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

// Tree traversal is a form of graph traversal and refers to the process of visiting each node,
// in a tree data structure, exactly once.

// Depth-first search is an algorithm for traversing or searching tree or graph data structures.
// The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // We will loop through each array elements and then will remove the element one by one
        // on removal of each element, we have to insert its children to the new array after removing that element
        const arr = [this.root]; // [a]
        while(arr.length) {
            const node = arr.shift(); // takeout first element of the array
            arr.push(...node.children); // [b', 'c', 'd']
            fn(node); // ['a', 'b', 'c', 'd']
        }
    }

    traverseDF(fn) {
        const arr = [this.root]; // [a]
        while(arr.length) {
            const node = arr.shift(); // takeout first element of the array
            
            // add the children to the start of the array
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };