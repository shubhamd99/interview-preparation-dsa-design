// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.

// The Depth-first search algorithm works by traversing a graph branch by branch. In other words, before traversing any Node's sibling Nodes,
// Its children nodes must be traversed.

// graph =        A
//             /  |  \
//            B   C   D
//          /  \     / \
//         E    F   G    H
//             / \   \
//            I   J   K 
 
// Output - ['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // O(v + e) time | O(v) space v is the no  of vertices of the branch, e is the no of edges connecting those node
    depthFirstSearch(array) {
        array.push(this.name);
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}

// Do not edit the line below.
exports.Node = Node;
