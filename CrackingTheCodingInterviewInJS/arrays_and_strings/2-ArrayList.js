// The array or list grows as you append items
// Java - An ArrayList is an array that resizes itself as needed while still providing O(1) access.
// Each doubling takes O(n) time, but happens so rarely that its amortized insertion time is still O(1)

// What is amortized insertion runtime O(1)
// Amortized time is the way to express the time complexity when an algorithm has the very bad time complexity only once in a while besides the time complexity that happens most of time.

// When ArrayList hits the array capacity in it,
// then it create a new array with the doubled size of the old array and
// copy all the items in the old array to the new array.
// In ArrayList, two time complexities exist; one is O(1) and the other is O(n).

// If the internal array capacity starts with 1,
// then the capacities will be 1, 2, 4, 8, 16… X when it hits the capacity and gets doubled.

// It takes 1, 2, 4, 8 16… X items to copy into the new array depending
// on the capacity that has been reached

// The insertion takes O(2X) when the capacity of X has been reached,
// and the amortized time for each insertion is O(1).

/**
 * Initializes a new instance of the ArrayList class with a given size
 * @param {number} size
 */
function ArrayList(size) {
  this.array = new Array(size);
  this.counter = 0;
  this.arrayInitSize = size; // Array Initialisation Size
}

// Add the given value to the end of this array.
ArrayList.prototype.add = function (value) {
  if (value) {
    this.set(this.counter, value);
    this.counter++;

    // When ArrayList hits the array capacity in it,
    // then it create a new array with the doubled size of the old array and
    // copy all the items in the old array to the new array.
    if (this.counter === this.arrayInitSize) {
      this.arrayInitSize = this.arrayInitSize * 2; // doubles
      const copy = this.array.slice();
      this.array = new Array(this.arrayInitSize);

      for (const [index, value] of copy.entries()) {
        this.set(index, value);
      }
    }
  }
};

// To access an element in the ArrayList
ArrayList.prototype.get = function (index) {
  return this.array[index] || null;
};

// To modify an element
ArrayList.prototype.set = function (index, value) {
  this.array[index] = value;
};

// To remove an element
ArrayList.prototype.remove = function (index) {
  if (this.array[index] !== undefined) {
    this.array.splice(index, 1); // 2nd parameter means remove one item only
  }
};

// Size of the array list
ArrayList.prototype.size = function () {
  return this.array.length;
};

// To remove all the elements in the ArrayList
ArrayList.prototype.clear = function () {
  this.array.length = 0;
  this.arrayInitSize = 0;
  this.counter = 0;
};

const Car = () => {
  const cars = new ArrayList(2);

  cars.add("Volvo");

  cars.add("BMW");

  console.log(cars.size()); // 4

  cars.add("Ford");

  cars.add("Mazda");

  console.log(cars.get(3)); // Mazda

  console.log(cars.size()); // 8

  cars.remove(2);

  cars.clear();

  console.log(cars.size());
};

Car();
