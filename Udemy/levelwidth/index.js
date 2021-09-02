// The width of one level is defined as the length between the end-nodes
// (the leftmost and right most non-null nodes in the level, where the null nodes
// between the end-nodes are also counted into the length calculation.

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// 0 -> data: data, childrens = [1,2,3]
// 1 => data: data, childrens = [4]
// 2 => data: data, childrens = []
// 3 => data: data, childrens = [5]
// 4 => data: data, childrens = []
// 5 => data: data, childrens = []

function levelWidth(root) {
    const arr = [root, 's']; // 's' is stopper
    const counters = [0]; // levels of the tree

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }
    }

    return counters; // [1, 1, 2, 1]
}

// Solution Logic:
// arr = [0th root node, 's'], counter = [0]
// start loop
// arr = ['s', 1st node, 2nd node, 3rd node], counter = [1]
// second iteration
// arr = [1st node, 2nd node, 3rd node,'s'], counter = [1, 0]
// third iteration
// arr = [2nd node, 3rd node,'s', 4th node], counter = [1, 1]
// third iteration
// arr = [3rd node,'s', 4th node], counter = [1, 2]
// fourth iteration
// arr = ['s', 4th, 5th node], counter = [1, 3]
// fourth iteration
// arr = [4, 5,'s'], counter = [1, 3, 0]
// fifth iteration
// arr = [5,'s'], counter = [1, 3, 1]
// sixth iteration
// arr = ['s'], counter = [1, 3, 2]
// loop stopped (arr.length > 1)

module.exports = levelWidth;