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

* Example: 
```
How many 2s do we multiply to get 8?
Answer: 2 × 2 × 2 = 8, so we had to multiply 3 of the 2s to get 8
So the logarithm is 3

The number we multiply is called the "base", so we can say:

"the logarithm of 8 with base 2 is 3"
```