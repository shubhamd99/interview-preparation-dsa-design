const moveAllXToEnd = require('./index');

test('moveAllXToEnd function exists', () => {
  expect(moveAllXToEnd).toBeDefined();
});

test('Move all the x to the end of the given string', () => {
  expect(moveAllXToEnd('abexexdexed')).toEqual('abeedeedxxx');
});

test('Move all the x to the end of the given string', () => {
    expect(moveAllXToEnd('xhixhix')).toEqual('hihixxx');
});