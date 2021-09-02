// Day 23: BST Level-Order Traversa

// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right,
// top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder
// function provided in your editor so that it prints the level-order traversal of the binary search tree.

// Inputr
// 6
// 3
// 5
// 4
// 7
// 2
// 1

// Output
// 3 2 5 1 4 7 

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function levelOrder
    this.levelOrder = function(root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

        const queue = [root];
        const result = [];

        while (queue.length) {
            let treeNode = queue.shift();

            result.push(treeNode.data);

            treeNode.left && queue.push(treeNode.left);
            treeNode.right && queue.push(treeNode.right);
        }

        console.log(result.join(' '));

	}; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;
    
    var values = _input.split('\n').map(Number);
    
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    tree.levelOrder(root);
});