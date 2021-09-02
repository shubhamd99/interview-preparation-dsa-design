const getTwoSum = require('./index');

test('getTwoSum function exists', () => {
    expect(getTwoSum).toBeDefined();
});

test('return all pairs of integers that sum to 7', () => {
    const arr = [3, 5, 2, -4, 8, 11]
    const result = [[ 5, 2 ],[ -4, 11 ]]
    expect(getTwoSum(arr, 7)).toEqual(result);
});