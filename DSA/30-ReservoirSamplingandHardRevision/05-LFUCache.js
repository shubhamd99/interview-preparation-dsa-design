// https://leetcode.com/problems/lfu-cache/description/ - HARD

// Design and implement a data structure for a Least Frequently Used (LFU) cache.

/**
 * Approach:
 * We need to design an LFU (Least Frequently Used) Cache with O(1) time complexity.
 *
 * Idea:
 * We expand upon the LRU Cache architecture. We maintain a `keyToNode` Hash Map
 * for instant lookups. We introduce a `freqMap` where the keys are frequencies
 * (popularity scores) and the values are completely independent Doubly Linked Lists
 * (acting as mini LRU Caches). We also maintain a `minFreq` variable to track the
 * lowest frequency currently in the cache, allowing O(1) evictions.
 * When a node is accessed, we remove it from its current frequency DLL, increment
 * its frequency, and insert it into the next frequency DLL. If the old DLL becomes
 * empty and was the `minFreq`, we increment `minFreq`.
 *
 * Steps:
 * 1. Define `Node` and `DoublyLinkedList` helper classes to keep the code clean.
 * 2. LFUCache Constructor: Initialize `keyToNode`, `freqMap`, `capacity`, `size`,
 *    and `minFreq`.
 * 3. `updateFreq(node)` Helper:
 *    - Remove node from `freqMap[node.freq]`.
 *    - If that DLL is now empty AND `node.freq === minFreq`, increment `minFreq`.
 *    - Increment `node.freq`.
 *    - Insert node into `freqMap[node.freq]` (creating the DLL if it doesn't exist).
 * 4. `get(key)`:
 *    - If key doesn't exist, return -1.
 *    - Get node, call `updateFreq(node)`, return `node.val`.
 * 5. `put(key, val)`:
 *    - If capacity is 0, return.
 *    - If key exists: Get node, update `val`, call `updateFreq(node)`.
 *    - If new key:
 *        - EVICTION: If `size === capacity`, get the DLL at `freqMap[minFreq]`.
 *          Remove its LRU node (head.next) from the DLL and `keyToNode`. Decrement `size`.
 *        - Create new node with freq = 1. Add to `keyToNode`.
 *        - Add to `freqMap[1]`. Set `minFreq = 1`. Increment `size`.
 *
 * Time Complexity: O(1) for both get and put.
 * Space Complexity: O(capacity) for the Maps and Nodes.
 */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.freq = 1; // New nodes always start with a popularity of 1
    this.prev = null;
    this.next = null;
  }
}

// A standard LRU Doubly Linked List implementation
class DoublyLinkedList {
  constructor() {
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0; // Track size so we know if a frequency bucket goes empty
  }

  insert(node) {
    const prevNode = this.tail.prev;
    const nextNode = this.tail;

    prevNode.next = node;
    nextNode.prev = node;

    node.prev = prevNode;
    node.next = nextNode;

    this.size++;
  }

  remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.size--;
  }

  removeLRU() {
    if (this.size === 0) return null;
    const lruNode = this.head.next;
    this.remove(lruNode);
    return lruNode;
  }
}

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0; // Tracks the lowest popularity score

  this.keyToNode = new Map();
  this.freqMap = new Map();
};

// --- CORE LOGIC: PROMOTE A NODE ---
LFUCache.prototype.updateFreq = function (node) {
  const oldFreq = node.freq;
  const oldList = this.freqMap.get(oldFreq);

  // 1. Remove it from its old popularity bucket
  oldList.remove(node);

  // 2. Did we just empty out the lowest popularity bucket?
  if (oldFreq === this.minFreq && oldList.size === 0) {
    this.minFreq++; // The minimum popularity just went up!
  }

  // 3. Promote the node!
  node.freq++;
  const newFreq = node.freq;

  // 4. Add it to its new popularity bucket
  if (!this.freqMap.has(newFreq)) {
    this.freqMap.set(newFreq, new DoublyLinkedList());
  }
  this.freqMap.get(newFreq).insert(node);
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.keyToNode.has(key)) return -1;

  const node = this.keyToNode.get(key);
  this.updateFreq(node); // It was accessed, so its popularity goes up!

  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;

  if (this.keyToNode.has(key)) {
    // Node exists! Just update value and promote it.
    const node = this.keyToNode.get(key);
    node.val = value;
    this.updateFreq(node);
    return;
  }

  // --- EVICTION LOGIC ---
  if (this.size === this.capacity) {
    // Find the bucket with the absolute lowest popularity
    const minList = this.freqMap.get(this.minFreq);

    // Remove the LRU node from that specific bucket
    const evictedNode = minList.removeLRU();
    this.keyToNode.delete(evictedNode.key);
    this.size--;
  }

  // --- INSERT NEW NODE ---
  const newNode = new Node(key, value);
  this.keyToNode.set(key, newNode);

  // New nodes always start at frequency 1
  if (!this.freqMap.has(1)) {
    this.freqMap.set(1, new DoublyLinkedList());
  }
  this.freqMap.get(1).insert(newNode);

  // The lowest popularity is now guaranteed to be 1
  this.minFreq = 1;
  this.size++;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[4,3], cnt(4)=2, cnt(3)=3

// --- EXAMPLE TRACE: LFU Cache ---

// Initialization: LFUCache(capacity = 2)
// State: size = 0, minFreq = 0
// freqMap: {}

// =========================================================
// 1. put(1, 1)
// =========================================================
// - Node(1) is new! We have space.
// - Insert Node(1) with freq = 1.
// - freqMap[1]: [ Node(1) ]
// - minFreq becomes 1. size = 1.

// =========================================================
// 2. put(2, 2)
// =========================================================
// - Node(2) is new! We have space.
// - Insert Node(2) with freq = 1.
// - freqMap[1]: [ Node(1) -> Node(2) ]
//   *(Note: Node(1) is at the front, so it is the LRU of this bucket)*
// - minFreq is still 1. size = 2. (CACHE IS FULL)

// =========================================================
// 3. get(1)
// =========================================================
// - Node(1) exists! Return its value: 1.
// - PROMOTION:
//   - Remove Node(1) from freqMap[1].
//     *(freqMap[1] still has Node(2), so minFreq stays 1).*
//   - Add Node(1) to freqMap[2].
// - freqMap[1]: [ Node(2) ]
// - freqMap[2]: [ Node(1) ]

// =========================================================
// 4. put(3, 3)
// =========================================================
// - Node(3) is new, but CACHE IS FULL! We must evict!
// - What is minFreq? It's 1.
// - Look at freqMap[1]: It only has Node(2).
// - EVICT Node(2)! (RIP)
// - Insert Node(3) with freq = 1.
// - freqMap[1]: [ Node(3) ]
// - freqMap[2]: [ Node(1) ]
// - minFreq is 1. size is still 2.

// =========================================================
// 5. get(2)
// =========================================================
// - We just killed Node(2). It doesn't exist.
// - Return -1.

// =========================================================
// 6. get(3)
// =========================================================
// - Node(3) exists! Return its value: 3.
// - PROMOTION:
//   - Remove Node(3) from freqMap[1].
//   - freqMap[1] is now EMPTY! Because minFreq was 1, minFreq goes up to 2!
//   - Add Node(3) to freqMap[2].
// - freqMap[1]: [ ] (Empty)
// - freqMap[2]: [ Node(1) -> Node(3) ]
//   *(Note: Node(1) was put here first, so it is the LRU of bucket 2!)*

// =========================================================
// 7. put(4, 4)
// =========================================================
// - Node(4) is new. CACHE IS FULL! We must evict!
// - What is minFreq? It is 2.
// - Look at freqMap[2]: It has [ Node(1) -> Node(3) ]. TIE-BREAKER!
// - EVICT the LRU node, which is Node(1)! (RIP)
// - Insert Node(4) with freq = 1.
// - freqMap[1]: [ Node(4) ]
// - freqMap[2]: [ Node(3) ]
// - minFreq drops back down to 1!

// =========================================================
// 8. get(1)
// =========================================================
// - We just killed Node(1). It doesn't exist.
// - Return -1.

// =========================================================
// 9. get(3)
// =========================================================
// - Node(3) exists! Return its value: 3.
// - PROMOTION:
//   - Remove Node(3) from freqMap[2].
//   - Add Node(3) to freqMap[3].
// - freqMap[1]: [ Node(4) ]
// - freqMap[3]: [ Node(3) ]

// =========================================================
// 10. get(4)
// =========================================================
// - Node(4) exists! Return its value: 4.
// - PROMOTION:
//   - Remove Node(4) from freqMap[1].
//   - freqMap[1] is EMPTY! minFreq was 1, so it goes up to 2!
//   - Add Node(4) to freqMap[2].
// - freqMap[2]: [ Node(4) ]
// - freqMap[3]: [ Node(3) ]
