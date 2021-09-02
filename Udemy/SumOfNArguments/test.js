const sumTillN = require('./index');

test('getOneDigit function exists', () => {
  expect(sumTillN).toBeDefined();
});

test('Sum up a all arguments in a function', () => {
  expect(sumTillN(1)(2)(3)(4)()).toEqual(10);
});
