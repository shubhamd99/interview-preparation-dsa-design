// JavaScript is a dynamically typed language, which means the types of variable types can be changed during runtime.
// Many interview questions involve recursion of objects that can hold values of different types and
// how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object).
// Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

export function isArray(value) {
  return Array.isArray(value);
}

// Alternative to isArray.
export function isArrayAlt(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  return value.constructor === Array;
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const type = typeof value;
  return type === "object" || type === "function";
}

// All JavaScript objects inherit properties and methods from a prototype.
// The JavaScript prototype property allows you to add new properties to object constructors

// In JavaScript, objects are created based on prototypes.
// Prototypes are objects that contain properties and methods that are inherited by other objects.
// When you create a new object, it inherits the properties and methods of its prototype object.

export function isPlainObject(value) {
  // For null and undefined.
  if (value == null) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value); // The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
  return prototype === null || prototype === Object.prototype;
}
