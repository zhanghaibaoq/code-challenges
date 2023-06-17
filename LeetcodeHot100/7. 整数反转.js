
var reverse = function (x) {
  const Max = Math.pow(2, 31) - 1;
  const Min = -Math.pow(2, 31);
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return result >= Min && result <= Max ? result : 0;

  // const result = x.toString().split('').reverse().join('');
  // return parseInt(result) * Math.sign(x);
};
