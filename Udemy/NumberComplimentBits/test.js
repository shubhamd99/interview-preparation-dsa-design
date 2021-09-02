const findComplement = require('./index');

test('findComplement function exists', () => {
  expect(findComplement).toBeDefined();
});

test('findComplement', () => {
    expect(findComplement(5)).toEqual(2);
});