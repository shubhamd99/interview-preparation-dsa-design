// Implement a function union(array) that creates an array of unique values, in order, from all given arrays.
// (Array): Returns the new array of combined values.
//  Lodash _.union

// Edge Cases
// If the function is called with non-array arguments, it will throw an error because non-array types do not have the forEach method that the function relies on.
// To solve this, we can check if each argument is an array using Array.isArray before attempting to iterate over it
//  If an argument is not an array, you can choose to skip it or add code to process these items separately.

// Solution 1: Using array to store the union values

/**
 * @param {...Array} [arrays] Array from which the elements are all numbers.
 * @return {Array} Returns the new array of combined values.
 */
function union(...arrays) {
  const result = [];

  // Outer array
  arrays.forEach((array) => {
    // Inner array
    array.forEach((item) => {
      // Check if the result array contains the `item`; if not, add it to the result.
      if (!result.includes(item)) {
        result.push(item);
      }
    });
  });

  console.log(result);
  return result;
}

// Solution 2: Use Set instead of array

/**
 * @param {...Array} [arrays] Array from which the elements are all numbers.
 * @return {Array} Returns the new array of combined values.
 */
function union2(...arrays) {
  const result = new Set(); // or can be simple object

  arrays.forEach((array) => {
    array.forEach((item) => {
      // Add `item` to the `result`. Set will automatically ensure uniqueness.
      result.add(item);
    });
  });

  // Convert the `result` back to an array before returning.
  return Array.from(result);
}

union([4, 2, 8, 6]); // => [4, 2, 8, 6]
union([2], [1, 2]); // => [2, 1]
union([1, 2, 2]); // => [1, 2]
union([]); // => []
union(["a", "b"], ["a", "c"]); // ['a', 'b', 'c']

union2([4, 2, 8, 6]); // => [4, 2, 8, 6]
union2([2], [1, 2]); // => [2, 1]
union2([1, 2, 2]); // => [1, 2]
union2([]); // => []
union2(["a", "b"], ["a", "c"]); // ['a', 'b', 'c']
