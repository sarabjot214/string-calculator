const add = (str) => {
    const delimeter = /,|\n/;
    const nums = str.split(delimeter).map(Number);
    const sum = nums.reduce(((sum, num) => sum + num), 0);
    return sum;
}

module.exports = add;