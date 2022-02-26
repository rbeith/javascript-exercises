const repeatString = function(string, num) {
  if (num >= 0) {
    let multiStr = "";
    for (let i = 0; i < num; i++) {
     multiStr += string;
    }
    return multiStr;
  } else return 'ERROR';
}

// Do not edit below this line
module.exports = repeatString;
