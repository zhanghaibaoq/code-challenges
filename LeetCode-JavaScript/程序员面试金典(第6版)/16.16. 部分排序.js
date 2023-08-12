// 第一种方法，将数组排序
// 将排好序的数组和旧的数组做对比，找到前后两个数组第一个数据不相等的位置，就是中间需要排序的子数组

/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function (array) {
  const newArr = Array.from(array);
  newArr.sort((a, b) => a - b);
  const len = array.length;
  let l = 0;
  while (l < len) {
    if (newArr[l] === array[l]) l++;
    else break;
  }
  if (l === len) return [-1, -1];
  let r = len - 1;
  while (r >= 0) {
    if (newArr[r] === array[r]) r--;
    else break;
  }
  return [l, r];
};
console.log(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));

/* 

// 左右遍历
var subSort = function(array) {
    let left = -1, right = -1, max = -Infinity, min = Infinity, j = array.length;;
    for (let i = 0; i < array.length; i++) array[i] < max ? (right = i) : (max = array[i]);
    while (j--) array[j] > min ? (left = j) : (min = array[j]);
    return [left, right];
};

// 排序数组
var subSort = function(array) {
    if (!array.length) return [-1, -1];
    const record = [...array].sort((a, b) => a - b);
    let i = 0, j = array.length;
    while (i < array.length && array[i] === record[i]) i++;
    while (j >= i - 1 && array[j] === record[j]) j--;
    return i > j ? [-1, -1] : [i, j];
};
*/