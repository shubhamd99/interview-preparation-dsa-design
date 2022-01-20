// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

// Delete Node in a Linked List

// Write a function to delete a node in a singly-linked list.
// You will not be given access to the head of the list,
// instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

const {Node, LinkedList} = require('./0-LinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {Node} node
 * @return {void} Do not return anything, modify node in-place instead.
*/
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

const l1 = new LinkedList();
l1.insertFirst(9);
l1.insertFirst(1);
l1.insertFirst(5);
l1.insertFirst(4);
l1.print();

deleteNode(l1.getFirst());
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
