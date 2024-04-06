// Implement a function functionLength, to return the number of parameters a function expects.
// Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by arguments.length)

/**
 * @param {Function} fn
 * @return {number}
 */
export default function functionLength(fn) {
  return fn.length;
}

function foo() {}
function bar(a) {}
function baz(a, b) {}

functionLength(foo); // 0
functionLength(bar); // 1
functionLength(baz); // 2
