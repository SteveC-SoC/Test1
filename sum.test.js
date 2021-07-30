const { expect, test } = require('@jest/globals');
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});


test('adds 4 + 5 to equal 9', () => {
    expect(sum(4,5)).toEqual(9);
});
test('result of sum should not be null', () => {
    expect(sum(4,5)).not.toBeNull();
});
test('result of sum should be defined', () => {
    expect(sum(4,5)).toBeDefined();
});
test('result to be a truthy', () => {
    expect(sum(4,5)).toBeTruthy();
});


