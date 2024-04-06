// Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

// (Object): Returns the object composed from the key-value pairs.

// Solution 1: Loop through the pairs array
// A for-of loop can be used to iterate through pairs and set the key and value on a result object.

/**
 * Creates an object from an array of key-value pairs.
 *
 * @param {Array} pairs - An array of key-value pairs.
 * @returns {Object} - The object composed from the key-value pairs.
 */
function fromPairs(pairs) {
  const result = {};

  for (const [key, value] of pairs) {
    result[key] = value;
  }

  return result;
}

const pairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

console.log(fromPairs(pairs)); // { a: 1, b: 2, c: 3 }
console.log(fromPairs([["a", 1]])); // { a: 1 } - Nested Array

// Solution 2: Use Object.fromEntries()
// There's a built-in static method on Object to do exactly this -- it transforms a list of key-value pairs into an object.

function fromPairs2(pairs) {
  return Object.fromEntries(pairs);
}
