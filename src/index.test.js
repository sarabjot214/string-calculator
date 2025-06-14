let add = require('./index');

test('should return 0 if empty string is passed to add fn', () => {
    expect(add("")).toBe(0);
});

test('should return same number if string contains 1 char', () => {
    expect(add("1")).toBe(1);
});

test('should return sum w.r.t addition of 2 nos if string contains 2 char seperated by ,', () => {
    expect(add("1,2")).toBe(3);
});

test('should return sum w.r.t addition of multiple nos if string contains multiple chars seperated by ,', () => {
    expect(add("1,2,3")).toBe(6);
});

test('should return sum w.r.t addition of multiple nos if string contains multiple chars seperated by ,|\n', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should return sum w.r.t addition of multiple nos if string contains multiple chars seperated by ,|\n', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should return sum w.r.t addition of multiple nos if string contains multiple chars seperated by diff delimeter', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('should throw an error for negative numbers', () => {
    expect(() => add('1,-2')).toThrow('negative numbers not allowed -2');
});