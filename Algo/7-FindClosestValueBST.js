// tree = 
//              10
//        5           15
//    2      5   13        22
//  1               14 

// target = 12

// Result = 13
 
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

// Sol - 1 (Recursive) Not Best
// Time complexity for most of the bst are O(log(n)) - removal, updation etc
// Average:
// O(log(n)) time - where n is the number of nodes in our tree
// O(log(n)) space - same as time, we are calling the function multiple times, we are adding frames on call stack causing extra memory

// Worst: O(n) time | O(n) space (When we have falling tree, one branch, either right or left, then we have to traverse them all)

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;

    // ABS removes the negative sign
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }

    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest;
    }
}

// Sol - 2 (Iteratively) Best
// Average: O(log(n)) time | O(1) constant space complexity
// Worst: O(n) time | O(1) space
function findClosestValueInBstHelper2(tree, target, closest) {
    let currentNode = tree; // O(1)

    while (currentNode !== null) {
        // ABS removes the negative sign
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
    
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }

    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// closest = 10 (default)
// Absolute Difference
// |10 - 12| = 2 > |10 - 12| = 2 (NA)

// 12 > 10
// Right Side

// |10 - 12| = 2 > |15 - 12| = 3 (NA)

// 12 > 15
// Left Side


// |10 - 12| = 2 > |13 - 12| = 1 (TRUE)
// closest = 13

// .
// .
// .
// Till end of the root