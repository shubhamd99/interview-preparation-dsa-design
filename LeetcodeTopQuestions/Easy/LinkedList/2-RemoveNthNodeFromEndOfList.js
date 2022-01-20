// Question - https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
// Sol - https://redquark.org/leetcode/0019-remove-nth-node/

// Remove Nth Node From End of List

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
*/
// Time - O(n) | Space - O(1)
var removeNthFromEnd = function(head, n) {

    // Two pointers - fast and slow
    let slow = head;
    let fast = head;
    
    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        if (fast.next === null) {
            // If n is equal to the number of nodes, delete the head node
            if (i === n - 1) {
                head = head.next;
            }
            return head;
        }
        fast = fast.next;
    }

    // Loop until we reach to the end.
    // Now we will move both fast and slow pointers
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Delink the nth node from last
    if (slow.next !== null) {
        slow.next = slow.next.next;
    }
    
    return head;
};

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Input: head = [1], n = 1
// Output: []

// Input: head = [1,2], n = 1
// Output: [1]