const findlongestWord = require('./index');

test('findlongestWord function exists', () => {
  expect(findlongestWord).toBeDefined();
});

test('Find the longest word', () => {
  expect(findlongestWord('I love dogs')).toEqual('love');
});

test('Find the longest word', () => {
    expect(findlongestWord('fun&!! time')).toEqual('time');
});