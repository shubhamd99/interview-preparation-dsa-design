const {removeDuplicates, removeDuplicatesGenerators} = require('./index');

test('removeDuplicates function exists', () => {
  expect(removeDuplicates).toBeDefined();
});

test('Find duplicates in an array', () => {
  const res = removeDuplicates([0, 2, 0, 1, 3, 3, 4, 4, 5]);
  expect(res).toEqual([0, 3, 4]);
});

test('Find duplicates in an array', () => {
    expect(removeDuplicates([0,2,0,1,3,3])).toEqual([0, 3]);
});

test('Find duplicates in an array', () => {
    expect(removeDuplicates([0, 'a', 0, 1, 'a', 3])).toEqual([0, 'a']);
});


test('Find duplicates in an array', () => {
  expect(removeDuplicates([0, 'a', 0, 1, 'a', 3])).toEqual([0, 'a']);
});

test('Find duplicates in an array with generators', () => {
  const res = removeDuplicatesGenerators([0, 'a', 0, 1, 'a', 3]);
  expect(res.next().value).toEqual(0);
  expect(res.next().value).toEqual('a');
  expect(res.next().value).toEqual(1);
  expect(res.next().value).toEqual(3);
  expect(res.next().done).toBeTruthy();
});