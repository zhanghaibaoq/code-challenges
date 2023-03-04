/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针+排序
var threeSum = function (nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  if (len < 3) return res;
  // nums[i]为基准 三数之和>o => r--; <0 =>l++ 
  for (let i = 0; i < len - 2; i++) {
    // 当前元素＞0，肯定不可能再sum=0了。
    if (nums[i] > 0) return res;
    // 排除重复元素
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let [l, r] = [i + 1, len - 1];
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        // 太小了，left右移
        l++;
      } else if (sum > 0) {
        // 太大了，right左移
        r--;
      } else {
        // 放入答案数组
        res.push([nums[i], nums[l], nums[r]]);
        // 去除重复元素!!!
        // 当sum==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,R 移到下一位置，寻找新的解
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};