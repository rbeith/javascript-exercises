const sumAll = function(a, b) {
    let finalSum;
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
        return "ERROR";
        } else if (a < b) {
            for (i = a; i <= b; i++) {
                finalSum = i * ( a + b ) / 2;
            }
            return finalSum;
        } else if (a > b) {
            for (i = b; i <= a; i++) {
                finalSum = i * ( a + b ) / 2;
        }
            return finalSum;
        }
    };

console.log(sumAll(100, 1))
// Do not edit below this line

module.exports = sumAll;
