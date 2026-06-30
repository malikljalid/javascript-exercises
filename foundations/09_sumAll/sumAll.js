const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
        return ("ERROR");

    let sum = 0;
    let min = (a > b) ? b : a;
    let max = (a > b) ? a : b;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
