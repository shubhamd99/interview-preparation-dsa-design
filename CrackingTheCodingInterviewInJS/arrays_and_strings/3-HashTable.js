// Hash Tables are a data structure that allow you to create a list of paired values.
// You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.

// A Hash Table transforms a key into an integer index using a hash function,
// and the index will decide where to store the key/value pair in memory:

// You'll commonly use a Hash Table because of its fast search, insertion, and delete operations:

// Algorithm	Average	 Worst case
// Space	      O(n)	  O(n)
// Search	      O(1)	  O(n)
// Insert	      O(1)	  O(n)
// Delete	      O(1)	  O(n)

// JavaScript object is an example of Hash Table implementation

// Object has properties added by the Object class. Keys you input may conflict and overwrite default properties inherited from the class.
// The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.

class HashTable {
  // The code below will create a table of buckets with the size of 127
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  /**
   * A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method
   * @param {string} key
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  // Check if the table[index] has a truthy value and the length property is greater than zero.
  // Assign the undefined value to the right index and decrement the size property by one if it is.
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]

console.log(ht.remove("Spain")); // true
console.log(ht.get("Spain")); // undefined

// How to Handle Index Collision

// Sometimes, the hash function in a Hash Table may return the same index number.
// In the test case above, the string "Spain" and "ǻ" both return the same hash value because the number 507 is the sum of both of their ASCII code.
// The same hash value will cause the index to collide, overwriting the previous entry with the new one.
// To handle the index number collision, you need to store the key/value pair in a second array

class HashTableWithoutCollision {
  // The code below will create a table of buckets with the size of 127
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  /**
   * A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method
   * @param {string} key
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          // If key already exists will assign the new value
          this.table[index][i][1] = value;
          return;
        }
      }
      // not found, push a new key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  // Check if the table[index] has a truthy value and the length property is greater than zero.
  // Assign the undefined value to the right index and decrement the size property by one if it is.
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht2 = new HashTableWithoutCollision();

ht2.set("France", 111);
ht2.set("Spain", 150);
ht2.set("ǻ", 192);

ht2.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht2.size); // 3
ht2.remove("Spain");
ht2.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
