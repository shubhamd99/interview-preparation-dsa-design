const getOneDigit = require('./index');

test('getOneDigit function exists', () => {
  expect(getOneDigit).toBeDefined();
});

test('Sum up a number until it becomes 1 digit', () => {
  expect(getOneDigit(234235)).toEqual(1);
});

test('Sum up a number until it becomes 1 digit', () => {
  expect(getOneDigit(657234)).toEqual(9);
});

test('Sum up a number until it becomes 1 digit', () => {
  expect(getOneDigit(2)).toEqual(2);
});

test('Sum up a number until it becomes 1 digit', () => {
  expect(getOneDigit(5)).toEqual(5);
});