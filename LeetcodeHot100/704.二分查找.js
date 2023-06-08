/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    // let mid = Math.floor((right - left) / 2 + left);
    mid = ((right - left) >> 1) + left;
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// 二维数组-二分查找
// 我们从数组中的左下角开始查找，左下角的数字 行：array.length-1   列：0，
// 如果目标值等于该值，则返回true；如果目标值大于该值则j++(向右移动);如果目标值小于该值则i--(向上移动）
var searchMatrix = function (matrix, target) {
  let i = array.length - 1;
  let j = 0;
  while (i >= 0 && j < array[0].length) {
    if (target === array[i][j]) {
      return [i, j];
    } else if (target > array[i][j]) {
      j++;
    } else if (target < array[i][j]) {
      i--;
    }
  }
  return false;
}
// 测试
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(searchMatrix(array, 5));

// let nums = [-1, 0, 3, 5, 9, 12], target = 9;
// console.log(search(nums, target));
// console.log((5 >> 1) + 1);
// console.log(7 / 3);
// // parseInt(string, radix) string要被解析的值。如果参数不是一个字符串，则将其转换为字符串 ； radix表示进制的基数 //https://www.runoob.com/jsref/jsref-parseint.html
// console.log(parseInt(7 / 3));//2
// console.log(parseInt("10.33")); //10
// console.log(parseInt("10", 8)); //8
// console.log(parseInt("10", 2)); //2
// console.log(parseInt("  10", 16)); //16   (16进制)
// console.log(parseInt("0x10")); //16
// console.log(parseInt("1033blue")); //1033
// console.log(parseInt("7*6", 10)); //7;*就是不合法的数字字符。所以只解析到"7"
// console.log(parseInt("blue1033")); //NaN
// console.log(parseInt("A", 16));// 10
// console.log(parseInt("555", 4)); // 这个会返回一个NaN,因为4比5小，所以这个会返回NaN
// console.log(Math.floor(7 / 3));//2

// let a = 113;
// console.log(typeof (a));//number
// console.log(typeof a.toString(2));//string
// console.log(a.toString(2));//1110001
// console.log(a.toString(8));//161
// console.log(a.toString());//113
// console.log(parseInt(a.toString(), 8));//75
// console.log(typeof (parseInt(a.toString(), 8)));//number