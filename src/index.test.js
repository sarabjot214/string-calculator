let add = require ('./index');

test('should return 0 if empty string is passed to add fn', () => {
    expect(add("")).toBe(0);
});

test('', () => {
    expect(add("1")).toBe(1);
})