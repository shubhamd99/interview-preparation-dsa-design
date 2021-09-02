const flattenArray = require('./index');

test('flattenArray function exists', () => {
    expect(flattenArray).toBeDefined();
});

test('Flatten the nested array', () => {
    const arr = [[1,2], 3, [4,[5,6,[7,8,9]]], 10]
    const result = [1,2,3,4,5,6,7,8,9,10];
    const res = flattenArray(arr);
    console.log("res", res);
    expect(res).toEqual(result);
});