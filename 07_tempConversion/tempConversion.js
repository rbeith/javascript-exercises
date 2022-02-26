const ftoc = function(ftemp) {
  let ctemp;
  return ctemp = (Math.round(((ftemp - 32) * 5/9)*10))/10
};
console.log(ftoc(500.9))

const ctof = function(ctemp) {
  let ftemp;
  return ftemp = (Math.round(((ctemp * (9/5)) + 32)*10))/10
};
console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
