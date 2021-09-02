const twoSum = require('./index');

test('getOneDigit function exists', () => {
  expect(twoSum).toBeDefined();
});

test('Find the index of the pair of elements from an specified array whose sum equals a specific target number', () => {
  expect(twoSum([10,20,10,40,50,60,70], 50)).toEqual([[ 0, 3 ],[2,3]]);
});
