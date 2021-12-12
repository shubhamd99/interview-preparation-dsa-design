//   tree =      1
//            2        3
//         4     5   6   7
//      8   9  10

// [15, 16, 18, 10, 11]
// 15 = 1 + 2 + 4 + 8
// 16 = 1 + 2 + 4 + 9
// 18 = 1 + 2 + 5 + 10
// 11 = 1 + 3 + 7

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time | O(n) space - where n is the number of nodes in the binary tree
function branchSums(root) {
    let sums = [];

    calculateBranchSums(root, 0, sums);

    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;

    const newRunningSum = runningSum + node.value;

    // When we reach end of any branch we will push the total sum for that branch into the sums array
    if(!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }


    // Will do recursion on every braches of the tree at the same time
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}