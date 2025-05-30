const add = (str) => {
    const nums = str.split(',').map(Number)
    const sum = nums.reduce(((sum, num) => sum + num), 0);
    return sum;
}

module.exports = add;