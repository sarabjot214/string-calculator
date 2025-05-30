const add = (str) => {
    let delimeter = /,|\n/,
        numStr = str;

    if (str.includes("//")) {
        let temp = str.split('\n');
        delimeter = temp[0].slice(2);
        numStr = temp[1];
    }

    const nums = numStr.split(delimeter).map(Number);

    const negativeNums = nums.filter(n => n < 0);
    
    if (negativeNums.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNums.join(', ')}`);
    }

    const sum = nums.reduce(((sum, num) => sum + num), 0);
    return sum;
};

module.exports = add;