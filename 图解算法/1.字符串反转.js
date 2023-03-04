// /* 字符串反转 */
const reverse1 = (str) => {
  return str.split('').reverse().join('');
};
const reverse2 = (str) => {
  let result = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   result += str[i];
  // }
  // return result;
  for (let i of str) {
    result = i + result;
  }
  return result;
};
console.log(reverse1('hello'));
console.log(reverse2('hello'));
console.log('hello'.split('')); //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(('hello'.split('')).reverse());
/* 判断是否是回文 */
const isPalindrome = (str) => str.split('').every((item, index) => item === str[str.length - index - 1]);
console.log(isPalindrome('hello')); //false
console.log(isPalindrome('racecar')); //true

/* 整数反转 */
const reverseInt = (num) => {
  const result = num.toString().split('').reverse().join('');
  return parseInt(result) * Math.sign(num);
};
const reverseInt2 = (num) => {
  let result = 0;
  while (num !== 0) {
    result = result * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return result;
};
console.log(reverseInt2(-1230));
console.log(reverseInt(-1230));
