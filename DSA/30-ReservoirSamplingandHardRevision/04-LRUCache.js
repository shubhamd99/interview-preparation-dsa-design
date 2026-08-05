// https://leetcode.com/problems/lru-cache/description/ - HARD

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists.
// Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation,
// evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

/**
 * Approach:
 * We need to design a Least Recently Used (LRU) Cache with O(1) time complexity
 * for both `get` and `put` operations.
 *
 * Idea:
 * We combine a Hash Map and a Doubly Linked List. The Map stores `key -> Node`
 * to provide O(1) instant lookups. The Doubly Linked List manages the usage
 * order, allowing us to rip nodes out of the middle and move them to the "Most
 * Recently Used" end in O(1) time. We use dummy `head` and `tail` nodes to
 * avoid messy null-pointer checks during insertion and deletion.
 *
 * Steps:
 * 1. Create a `Node` class with `key`, `val`, `prev`, and `next` pointers.
 * 2. Constructor:
 *    - Initialize capacity and a Map.
 *    - Setup dummy `head` and `tail` nodes and wire them together.
 * 3. Helper Functions:
 *    - `remove(node)`: Snips a node's wires, connecting its prev directly to its next.
 *    - `insert(node)`: Slaps a node right before the dummy `tail` (making it MRU).
 * 4. `get(key)`:
 *    - If key in Map: Grab node, `remove()` it, `insert()` it (refreshing it to MRU), return val.
 *    - Else: return -1.
 * 5. `put(key, value)`:
 *    - If key in Map: Grab node, `remove()` it.
 *    - Update its value, `insert()` it (refreshing it to MRU), add to Map.
 *    - If Map size > capacity: Grab the LRU node (`head.next`), `remove()` it from
 *      the list, and delete its key from the Map to free up space!
 *
 * Time Complexity: O(1) for both get and put.
 * Space Complexity: O(capacity) for the Map and Linked List.
 */

// --- 1. The Doubly Linked List Node ---
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  // 2. Setup the Dummy Bookends
  this.head = new Node(-1, -1); // Left side (Least Recently Used)
  this.tail = new Node(-1, -1); // Right side (Most Recently Used)

  // Wire the bookends together!
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

// --- HELPER 1: Remove a node from the list ---
LRUCache.prototype.remove = function (node) {
  const prevNode = node.prev;
  const nextNode = node.next;

  // Snip the node out of the chain!
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
};

// --- HELPER 2: Insert a node as the MRU (Right before Tail) ---
LRUCache.prototype.insert = function (node) {
  const prevNode = this.tail.prev;
  const nextNode = this.tail;

  // Wire the node in between the old MRU and the Tail
  prevNode.next = node;
  nextNode.prev = node;

  node.prev = prevNode;
  node.next = nextNode;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);

    // Refresh the node! Tear it out, and slap it at the MRU end.
    this.remove(node);
    this.insert(node);

    return node.val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    // If it exists, tear it out so we can update it
    const node = this.map.get(key);
    this.remove(node);
  }

  // Create/Update the node, and slap it at the MRU end
  const newNode = new Node(key, value);
  this.map.set(key, newNode);
  this.insert(newNode);

  // --- EVICTION LOGIC ---
  // If we blew past our capacity, someone has to die!
  if (this.map.size > this.capacity) {
    // The Head's 'next' pointer ALWAYS points to the Least Recently Used guy
    const lruNode = this.head.next;

    this.remove(lruNode); // Kill him from the Linked List
    this.map.delete(lruNode.key); // Kill him from the Map!
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
