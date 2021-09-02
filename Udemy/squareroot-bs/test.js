const { sqrt } = require('./index');

test('function sqrt exists', () => {
  expect(typeof sqrt).toEqual('function');
});

test('Find Square Root with Binary Search', () => {
  const num = 16;
  const sqroot = sqrt(num);
  console.log("sqrt function output: ", sqroot)

  expect(sqroot).toEqual(4);
});

test('Find Square Root with Binary Search', () => {
  const num = 8;
  const sqroot = sqrt(num);
  console.log("sqrt function output: ", sqroot)

  expect(sqroot).toEqual(2.828125);
});
