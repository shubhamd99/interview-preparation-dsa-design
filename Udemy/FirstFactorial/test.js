const FirstFactorial = require('./index');

test('FirstFactorial function exists', () => {
  expect(FirstFactorial).toBeDefined();
});

test('First Factorial of 2', () => {
  expect(FirstFactorial(2)).toEqual(2);
});

test('First Factorial of 4', () => {
    expect(FirstFactorial(4)).toEqual(24);
});

test('First Factorial 0f 10', () => {
    expect(FirstFactorial(10)).toEqual(3628800);
});