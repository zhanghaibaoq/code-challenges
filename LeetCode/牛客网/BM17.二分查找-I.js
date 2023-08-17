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
