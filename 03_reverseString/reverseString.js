const reverseString = function(text) {
    const textArray = text.split("");
    const reverseArray = textArray.reverse();
    const reverseString = reverseArray.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
