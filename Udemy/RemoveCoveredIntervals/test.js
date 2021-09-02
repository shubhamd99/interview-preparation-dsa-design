const removeCoveredIntervals = require('./index');

test('removeCoveredIntervals function exists', () => {
  expect(removeCoveredIntervals).toBeDefined();
});

test('removeCoveredIntervals', () => {
    expect(removeCoveredIntervals([[1,4],[3,6],[2,8]])).toEqual(2);
});