/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = (nums) => {
  // 自定义排序，比较`'ab'`和`'ba'`（都是字符串）的大小。
  return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('');//  1. 两个数拼接成字符串，比较字符串大小
};

/* 
a和b两个数字可以有两种组合：ab和ba，若ab<ba则ab应该排在ba前面，否则ab应该排在ba后面。
使用数组的sort方法，底层是快排，也可以手写一个快排。
sort方法接收一个比较函数，compareFunction：如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
*/


/* 
arr.sort([compareFunction])
compareFunction 参数：第一个用来比较的元素,第二个用来比较的元素
返回值：排序后的数组
如果传了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：
如果 compareFunction(a, b) return 的结果小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) return 的结果等于 0 ， a 和 b 的相对位置不变。
如果 compareFunction(a, b) return 的结果大于 0 ， b 会被排列到 a 之前。
 */

var numbers = [4, 2, 5, 1, 3];
/*
  一开始 4-2 =2 return大于0的数  b（较小的数）会往前 a（较大的数）会往后，
  然后第二次 4 - 5 = -1 return小于0的数，则 a（较小的数）往前，b（教大的数）往后
  后面一次按此把小的数往前排最后完成升序排序
*/
numbers.sort((a, b) => a - b);
console.log(numbers);
// [1, 2, 3, 4, 5]

// 遇到小的数（b） 减去 大的数（a） 不会变位置 b-a 小于0 （a，b）位置不变
// 遇到大的数（b） 减去 小的数（a） b-a 大于0 ，（a，b） 大的往前放，小往后，最后成降序排序
numbers.sort((a, b) => b - a);
console.log(numbers);
// [5, 4, 3, 2, 1]

let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
// 按名字进行降序操作;
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // 全部转为大写进行比较
  var nameB = b.name.toUpperCase();  //  可以忽略大小写产生的影响
  if (nameA < nameB) { //如果 nameA 小于 B 则位置不比变
    return -1;
  }
  if (nameA > nameB) {  //  如果name A 大于 B 则B 与 A 交换位置
    return 1;
  }

  // 名字相同时 不变
  return 0;
});

// 按值进行升序操作
items.sort(function (a, b) {
  return a.value - b.value;
});

console.log(items);