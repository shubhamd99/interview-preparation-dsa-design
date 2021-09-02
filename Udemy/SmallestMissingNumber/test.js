const smallest = require('./index');

test('smallest function exists', () => {
  expect(smallest).toBeDefined();
});

test('Find Missing Smallest Positive Number ', () => {
  expect(smallest([3,4,7,1])).toEqual(2);
});

test('Find Missing Smallest Positive Number ', () => {
    expect(smallest([2,3,4,7,6,1,5,9])).toEqual(8);
  });
