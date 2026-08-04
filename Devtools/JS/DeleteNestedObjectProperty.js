// https://devtools.tech/questions/s/delete-nested-object-property---qid---004O0l5ORcY422melAYr?language=javascript&sort=createdAt

// Implement a function deleteNode that removes a property from a nested object.
// The function receives:
// An object
// A key that needs to be deleted

// The function should recursively traverse the object, find the matching key, and remove it from the object.

// Recursion IS Depth-First Search
// By writing a function that calls itself every time it sees a new object (traverse(currentValue, key)),
// you are naturally implementing a Depth-First Search. I

function traverse(currentItem, key) {
  // looping through all keys
  for (const currentKey in currentItem) {
    // checking if currentKey is own property
    // i.e. we only want to delete direct properties
    // we don't want to delete prototype properties
    if (!Object.prototype.hasOwnProperty.call(currentItem, currentKey)) {
      continue;
    }

    // key found, delete and stop traversal
    if (currentKey === key) {
      delete currentItem[currentKey];

      // returning true so recursion stops
      return true;
    }

    // getting current value
    const currentValue = currentItem[currentKey];

    // recursively traversing nested objects/arrays
    if (currentValue && typeof currentValue === "object") {
      const isDeleted = traverse(currentValue, key);

      // stopping traversal once deleted
      if (isDeleted) {
        return true;
      }
    }
  }

  return false;
}

function deleteNode(collection, key) {
  const isCollectionInvalid = !collection || typeof collection !== "object";

  const isKeyInvalid = typeof key !== "string" || !key.trim().length;

  // invalid input check
  if (isCollectionInvalid || isKeyInvalid) {
    return undefined;
  }

  // starting DFS traversal
  // iterate till we find the exact key to delete
  traverse(collection, key);

  // returning updated object
  return collection;
}
