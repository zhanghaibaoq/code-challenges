/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search (nums, target) {
  // write code here
  let [l, r] = [0, nums.length - 1];
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);// let mid = left + Math.floor((right - left) /2)
    if (target > nums[mid]) {
      l = mid + 1;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else return mid;
  }
  return -1;
}
module.exports = {
  search: search,
};
