// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// Slow --> 1, Fast --> 2
// (1) 2 3 4 5 --> slow will be at 1, fast will be at 1 , and fast has two nodes front of it
// 1 (2) (3) 4 5 --> slow will be at 2, fast will be at 3 , and fast has two nodes front of it
// 1 2 (3) 4 (5) --> slow will be at 3, fast will be at 5 , and fast has no nodes defined in-front of it
// So, three is the midpoint

function midpoint(list) {
    let slow = list.getFirst(); // list.head
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = midpoint;