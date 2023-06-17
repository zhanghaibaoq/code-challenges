/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */
//  https://www.bilibili.com/video/BV1Da411X7NH?p=24&vd_source=eac7ee3e188e81d32edf392ab1aa352c

// 递归公式
function backtrack (list, temp, nums) {
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    // 找到一个不在temp里的数字
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}

const permute = function (nums) {
  // 1、终止条件
  let list = [];
  backtrack(list, [], nums);
  return list;
};


const permute2 = nums => {
  if (!nums) return [];
  const res = [];
  // path是组合的数组
  const search = path => {
    if (path.length === nums.length) {
      // 长度满足条件，推入res数组
      res.push(path);
      return;
    }
    for (const num of nums) {
      if (!path.includes(num)) {
        // 将没出现过的数字，加入path继续找
        search([...path, num]);
      }
    }
  };
  // 从空数组开始
  search([]);
  return res;
};


let nums = [1, 2, 3];
console.log(permute2(nums));
