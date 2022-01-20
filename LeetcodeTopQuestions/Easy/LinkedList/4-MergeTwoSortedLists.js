// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/771/
// Sol - https://dev.to/urfan/leetcode-merge-two-sorted-lists-with-javascript-3lnl

// Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead;

    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }

    if (list1 !== null) {
        currentNode.next = list1;
    } else if (list2 !== null) {
        currentNode.next = list2;
    }

    return dummyHead.next;
};
