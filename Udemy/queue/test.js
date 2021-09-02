const Queue = require('./index');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

// toThrow matcher requires function to be passed as argument to expect so you can simply wrap your function call in anonymous function
// You can also use bind to create new 'version' of your function that when called will be passed provided arguments:
// expect(myFunc.bind(null, arg1, arg2, arg3)).not.toThrow();

test('can add elements to a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
});

test('can remove elements from a queue', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
    q.remove();
  }).not.toThrow();
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});