const removeFromArray = function(array, ...element) {
    let elemArray = element;

    let firstArray = array;

    newArray = firstArray.filter(item => !elemArray.includes(item));

    return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;


// pseudocode

// items from the elements parameter should be removed from the array parameter
// first, the elements parameter should provide a variable that the array parameter can read.
// this should be an index of the item in the array.
// the indexed item will be removed from the array parameter
// the array parameter will be returned. 