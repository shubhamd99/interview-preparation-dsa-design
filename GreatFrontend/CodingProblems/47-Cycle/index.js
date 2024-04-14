// Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

// Edge case: The function should not be called without any arguments.

/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
function cycle(...values) {
  let index = 0;

  return function () {
    const currentValue = values[index];
    // 1  %  2 = 1
    // 2  %  2 = 0
    // 1  %  2 = 1
    index = (index + 1) % values.length;
    return currentValue;
  };
}

// Shorter
function cycle2(...values) {
  let index = -1;

  return () => {
    index = (index + 1) % values.length;
    return values[index];
  };
}

const helloFn = cycle("hello");
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle("on", "off");
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
