// This distance between a node in a Binary Tree and the tree's root is called the node's depth.
// Write a function that takes in a Binary Tree and returns the sum of its node depths.

// tree =       1
//          2        3
//       4    5   6    7
//    8    9

// Ans- 16
// Depth of 2 is 1
// Depth of 3 is 1
// Depth of 4 is 2
// Depth of 5 is 2
// ...........
// Summing all of these depths = 16

// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in the binary tree
// and h is the height of the binary tree
function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        if (node === null) continue;

        sumOfDepths += depth;
        stack.push({ node: node.left, depth: depth + 1 });
        stack.push({ node: node.right, depth: depth + 1 });
    }
    return sumOfDepths;
}

// Average case: when the tree is balanced
// O(n) time | O(h) space - where n is the number of nodes in the binary tree
// and h is the height of the binary tree
function nodeDepths2(root, depth = 0) {
   if (root === null) return 0;
   return depth + nodeDepths2(root.left, depth + 1) + nodeDepths2(root.right, depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}