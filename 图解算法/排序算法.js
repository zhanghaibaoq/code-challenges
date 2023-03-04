// https://juejin.cn/post/6844904144566747149 JavaScript算法时间、空间复杂度分析
const { arr } = require('./data');

// console.log(arr.sort((a, b) => a - b));


/* 冒泡排序 */
const bubbleSort = (arr) => {
  let len = arr.length - 1;
  let bool = false;//是否进行过交换
  for (let j = 0; j < len; j++) {
    bool = false;
    // 每个人与他右边的人比较，如果你比他大，就交换
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        bool = true;
      }
    }
    if (!bool) break;
  }
  return arr;
};
console.log(bubbleSort(arr));


/* 快速排序 O(nlogn)*/
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let mid = arr.splice(0, 1)[0];//取第一个数为基准数
  for (let i of arr) {
    if (i < mid) {
      left.push(i);
    } else {
      right.push(i);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
};

const quickSort2 = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let mid = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat(mid, quickSort2(right));
};
console.log(quickSort2(arr));

// 原地快排
// i->  <-j
// 1 2 3 4 5 6 7 8 9
// i找到比基准数大的，j找到比基准数小的，交换
const quickSort3 = (arr) => {
  const sort = (arr, left, right) => {
    if (left >= right) return;
    let i = left;
    let j = right;
    let mid = arr[left];
    while (i < j) {
      while (i < j && arr[j] >= mid) j--;
      while (i < j && arr[i] <= mid) i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];//将基准数放到中间
    sort(arr, left, i - 1); //左边递归
    sort(arr, i + 1, right);
  };
  sort(arr, 0, arr.length - 1);
  return arr;
};
console.log(quickSort3(arr));


