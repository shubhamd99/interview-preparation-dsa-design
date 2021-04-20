#### Big O Notation

* Big O Notation is a way to measure how well a computer algorithm scales as the number of data increases.

* We use Big O Notation to classify algorithms by how they respond to changes in input size, so algorithms with the same growth rate are represented with the same Big O Notation. The letter O is used because the rate of growth of a function is also called order of the function.

* Time Complexity - Time complexity of an algorithm signifies the total time required by the program to run till its completion. The time complexity of algorithms is most commonly expressed using the big O notation.

1. A constant operation O(1)
`const total = people.length;`

2. A Linear operation O(n)
`const names = people.map(({ name }) => name);`

3. A Quadratic operation O(n^2)
```
const peopleWithSameAge = people.filter
(
 ({ age }) =>   
   people.filter(person => person.age == age)
   .length > 1
);
```

4. A Logarithmic notation or O(log(n)), this is very common in divide and conquer algorithms type (binary search)
```
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```


5. Constants doesn't matter
```
O(2n) --> O(n)
O(500) --> O(1)
O(13n ^ 2) --> O(n ^ 2) n square
```

6. Smaller terms doesn't matter
```
O(n + 10) --> O(n)
O(1000n + 50) --> O(n)
O(n ^ 2  + 5n + 8) --> O(n2) n square
```

7. Big O Shorthands
```
a. arthmetic operations are constant
b. variable assignment is constant
c. Accessing elements in an array (by index) or object (by key) is constant
d. In a loop, the complexity is the length of the loop times the complexity of whatever happends inside of the loop
```

#### Space Complexity

* Space Complexity - The memory require by an algorithm to run. It is a measure of the amount of working storage an algorithm needs. 
```
a. Auxilary Space - It is a temp space used by algorithm for execution, not including space taken up by the inputs.
b. Input Space - The space needed during execution considering the size of the input.
```

3. Rules of thumb
```
a. Most primitive (booleans, numbers, undefined, null) are constant space.
b. Strings require O(n) space (where n is the string length)
c. Reference types are generally O(n) , where n is the length (for arrays) or the number of keys (for objects)
```

#### Logarithms

* In mathematics, the logarithm is the inverse function to exponentiation. A logarithm is the power to which a number must be raised in order to get some other number.
* Searching algorithms have logrithmic time complexity, sorting algorithms involve logrithms and recursion somtimes involves logrithmic space complexity

```
Example: How many 2s do we multiply to get 8?
Answer: 2 × 2 × 2 = 8, so we had to multiply 3 of the 2s to get 8
So the logarithm is 3

The number we multiply is called the "base", so we can say:

"the logarithm of 8 with base 2 is 3"
or "log base 2 of 8 is 3"
or "the base-2 log of 8 is 3"

Example: What is log5(625) ... ?
5 × 5 × 5 × 5 = 625, so we need 4 of the 5s
Answer: log5(625) = 4
```
```
a. O(log n) --> Good
b. O(nlog n) --> Slightly Better than O(n^2)

```

![alt text](https://i.imgur.com/g8zYyt2.png)

#### Objects

* Un-ordered key value pairs
* Fast access/removal and insertion

```
BigO:

Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
Object.hasOwnProperty - O(1)
```

#### Arrays

* Ordered List
* Fast access/removal (sort of..)

```
BigO:

Insertion - It depends..
Removal - It depends..
Searching - O(N)
Access - O(1)

push - O(1)
pop - O(1)
shift - O(N)
unshift - O(N)
concat - O(N)
slice - O(N)
splice - O(N)
sort - O(N * logN)
filter/forEach/map/reduce etc.. - O(N)
```

#### Algorithms

* A process or set of steps to accomplish a certain task. Almost everything you do in programming involves some kind of algorithm.

#### Understanding the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? 
5. How should I label the important pieces of data that are a part of the problem.

#### Frequency Counters

* This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or (O^2) operations with arrays/strings.

#### Multiple Pointers

* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition. Very efficient for solving problems with minimal space compexity as well.

#### Sliding Window

* This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string

#### Divide & Conquer

* This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This process can tremendously decrease time complexity. (Sorting Algorithms, Searching Algorithms)

#### ES6 Iterators and Generators
* Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
* {Object} => Iterator => Generator

* In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

* Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties
1. value: The next value in the iteration sequence.
2. done: This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

* A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.

* Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the `function*` syntax

* The yield keyword is used to pause and resume a generator function

* The well-known Symbol.iterator symbol specifies the default iterator for an object. Used by for...of. For making an object iteratable by making one of our own.


##### Example: 
```
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
        current = 0;
        next = 1;
    }
  }
}