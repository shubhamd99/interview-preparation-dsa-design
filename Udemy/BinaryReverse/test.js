const binaryReverse = require('./index');

test.skip('binaryReverse function exists', () => {
  expect(binaryReverse).toBeDefined();
});

test('Binary Reversal of 47', () => {
  expect(binaryReverse(47)).toEqual(244);
});

test('Binary Reversal of 213', () => {
    expect(binaryReverse(213)).toEqual(171);
});

test('Binary Reversal of 4567', () => {
    expect(binaryReverse(4567)).toEqual(7537);
});