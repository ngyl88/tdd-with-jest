const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
test('non consecutive working for array with 2 positive numbers', () => {
    expect(firstNonConsecutiveNumber([1, 3])).toBe(3)
})

test('non consecutive working for array with more than 2 positive numbers', () => {
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toBe(4)
})

test('non consecutive working for array with some negative numbers', () => {
    expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toBe(-10)
})

test('non consecutive for array with consecutive numbers returns null', () => {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBeNull()
})