const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// test cases
test('sum with all unique occurence returns correct result', () => {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toBe(16)
})

test('sum with 2 occurence of lowest number returns correct result', () => {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toBe(5)
})

test('sum with multiple occurence of highest number returns correct result', () => {
    expect(sumWithoutHighestAndLowest([1100, 1100, 1, 2, 3, 1100])).toBe(5)
})
