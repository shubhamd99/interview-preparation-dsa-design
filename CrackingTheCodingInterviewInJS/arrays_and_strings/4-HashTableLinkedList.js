// How to Handle Index Collision

// Sometimes, the hash function in a Hash Table may return the same index number.
// In the test case above, the string "Spain" and "ǻ" both return the same hash value because the number 507 is the sum of both of their ASCII code.
// The same hash value will cause the index to collide, overwriting the previous entry with the new one.
// To handle the index number collision, you need to store the key/value pair in a second array

// If the number of collisions is very high, the worst case runtime is O(n), where n is the number of keys

// The node class should only be created with a key value pair
class Node {
  constructor(key, value) {
    this[key] = value;
    this.next = null;
  }
}

// The list class will take a node as an argument to start the chain
class List {
  constructor(node) {
    this.head = node;
    this.count = 0;
  }
}

class HashTable {
  constructor(limit) {
    this.storage = [];
    this.limit = limit || 50; // I wanted to start with a base limit of 50, but will add a doubler function later that expands it when necessary. To avoid collisions more, make this larger
    this.count = 0;
  }

  /**
   * A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method
   * @param {string} key
   */
  makeHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.limit; // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
  }

  // insert is the simplest function and will always create a new bucket with a list or add a node to a list unless a JS error occurs
  insert(key, value) {
    let index = this.makeHash(key);
    let bucket = this.storage[index];
    let item = new Node(key, value);

    // Create a new bucket if none exist
    if (!bucket) {
      bucket = new List(item);
      this.storage[index] = bucket;
      bucket.count++;
      this.count++;

      return "New bucket created";
    } else {
      let current = bucket.head;

      // If the head has null next it is there is only one node in the list
      if (!current.next) {
        current.next = item;
      } else {
        // move to the end of the list
        while (current.next) {
          current = current.next;
        }

        current.next = item;
      }
      bucket.count++;
      this.count++;

      return "New item placed in bucket at position " + bucket.count;
    }
  }

  // Updating at a specific node is currently not working??????
  update(key, value, i) {
    let pos = i || null; // position variables don't have to be passed in, and most often won't
    let index = this.makeHash(key);
    let bucket = this.storage[index];
    let item = new Node(key, value);

    if (!bucket) {
      bucket = new List(item);
      this.storage[index] = bucket;
      bucket.count++;
      this.count++;

      return "New Bucket created";
    } else if (i >= bucket.count) {
      return "Update position is greater than bucket list length"; // We don't want nodes to be greater than the actual data in the list
    } else {
      let current = bucket.head;

      // Update the head node
      if (!i || i === 1) {
        current[key] = value;
      } else {
        let n = 1;

        // This while will never go past the last node
        while (n < pos) {
          current = current.next;
          n++;
        }

        current[key] = value;

        return "Item updated at position " + pos;
      }
    }
  }

  retrieve(key, i) {
    let pos = i || null;
    let index = this.makeHash(key);
    let bucket = this.storage[index];

    if (!bucket) {
      return "Item not found";
    }

    if (pos > bucket.count) {
      return "Retrieval position is greater than bucket length";
    }

    if (!i || i === 1) {
      return bucket.head[key]; // Return the value only, can be modified
    }

    let n = 1;
    let current = bucket.head;

    while (n < pos) {
      current = current.next;
      n++;
    }

    return current[key];
  }

  // Removing nodes is a little tricky. The node is not actually removed but skipped over by either moving the head or changing the previous node's next value to the node after the current one. Removing buckets is easy, just splice.
  remove(key, i) {
    let pos = i || null;
    let index = this.makeHash(key);
    let bucket = this.storage[index];

    if (!bucket) {
      return "Bucket not found";
    }

    if (pos > bucket.count) {
      return "Position argument is longer than length of bucket";
    }

    let current = bucket.head;
    let previous;

    if (!pos || pos === 1) {
      // Completely splice the bucket if it will have no nodes
      if (bucket.count === 1) {
        this.storage.splice(index, 1);
        this.count--;

        return "Hash table spliced at hash index";
      }

      // Shift the head one node forward
      bucket.head = current.next;
      bucket.count--;
      this.count--;

      return "Linked list head repositioned";
    }

    let n = 1;

    while (n < pos) {
      previous = current;
      current = current.next;
      n++;
    }

    // Shift the previous node's next value one node further
    previous.next = current.next;
    bucket.count--;
    this.count--;

    return "Linked list item removed at position " + pos;
  }
}

const hash = new HashTable();

hash.insert("James Hamann", 30); // Will create a bucket at hash.storage[9] and insert list with node of key, value
hash.insert("James Hamann", 35); // Will insert new node onto list at same bucket with new key value pair
hash.insert("Shubham Dhage", 23);

console.log(hash.retrieve("James Hamann")); // Should value at first node in the bucket (30)
console.log(hash.retrieve("Shubham Dhage")); // 23
