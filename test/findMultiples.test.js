const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
test('findMultiples(a, b) with b is a multiple of a returns an array inclusive b', () => {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
})

test('findMultiples(a, b) with <b> is not a multiple of <a> returns an array of multiples up to b', () => {
    expect(findMultiples(2, 5)).toEqual([2, 4]);
})
