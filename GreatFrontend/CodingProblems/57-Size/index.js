// Implement a function size(collection) that takes a collection (an array, object, string, Map, Set) and returns its size, which represents the number of elements in the collection.
// Return 0 if the collection type is not one of the supported types.
// Lodash _.size

/**
 * Gets the size of `collection` by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 *
 * @param {Array | Object | Map | Set | string | null | undefined} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 */
function size(collection) {
  // Check for both null and undefined
  if (collection == null) {
    return 0;
  }

  // Array and string
  if (Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  if (typeof collection === "object") {
    return Object.keys(collection).length;
  }

  return 0;
}

// Arrays.
size([1, 2, 3, 4, 5]); // => 5
// Object.
size({ a: 1, b: 2 }); // => 2
// Strings.
size("peanut"); // => 6
// Sets.
size(new Set([1, 2, 3])); // => 3
// Maps.
size(
  new Map([
    [1, 2],
    [3, 4],
  ])
); // => 2
