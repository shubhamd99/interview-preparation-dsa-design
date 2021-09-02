const { recursiveBinarySearch, recursiveBinarySearchUnsorted } = require('./index');

test('function recursiveBinarySearch exists', () => {
  expect(typeof recursiveBinarySearch).toEqual('function');
});

test('function recursiveBinarySearchUnsorted exists', () => {
  expect(typeof recursiveBinarySearchUnsorted).toEqual('function');
});

test('Binary Search Tree on Sorted Array', () => {
  const arr = [1, 3, 5, 7, 8, 9];
  const find = recursiveBinarySearch(arr, 5, 0, arr.length - 1);
  console.log("find function output: ", find)

  expect(find.value).toEqual(5);
  expect(find.index).toEqual(2);
});

test('Binary Search Tree on Un-Sorted Array', () => {
  const arr = [ 4, 6, 9, 1, 71, 3, 8 ]; 

  const find = recursiveBinarySearchUnsorted(arr, 8, 0, arr.length - 1);
  console.log("find function output: ", find);

  // Find Index of 8
  expect(find).toEqual(6);
});
