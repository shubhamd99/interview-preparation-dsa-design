// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

// Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
*/
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }

    let prev = null;
    let curr = head;
    let nextTemp = curr.next;

    while (curr !== null) {
        nextTemp = curr.next; // As I explained earlier, I save the next pointer in the temp variable.
        curr.next = prev;  // Then I reverse the pointer of the current node to its previous node.
        prev = curr;  //  The previous node becomes the node we are currently at.
        curr = nextTemp;  // And the current nodes becomes the next node we saved earlier. And we keep iterating.
    }

    // At the end, our previous node will be the head node of the new list. 
    return prev;
};

// Recursive
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
