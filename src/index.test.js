let add = require ('./index');

test('should return 0 if empty string is passed to add fn', () => {
    expect(add("")).toBe(0);
});

test('should return same number if string contains 1 char', () => {
    expect(add("1")).toBe(1);
});

test('should return addition of 2 nos if string contains 2 char seperated by ,', () => {
    expect(add("1,2")).toBe(3);
});