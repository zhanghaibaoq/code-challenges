// dp[i]dp[i] 的值代表 nums 以 nums[i]nums[i] 结尾的最长子序列长度。
// https://leetcode.cn/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let ans = 0;
  for (let i = 1; i < nums.length; i++) { //对于第i个元素nums[i]
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
      //如果nums[j]比nums[i]小 更新dp[i]
    }
    ans = Math.max(ans, dp[i]);//更新最大值
  }
  return ans;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

const lengthOfLIS2 = nums => {
  const len = nums.length;
  if (len === 1) return 1;
  const dp = new Array(len).fill(1);
  let res = 0;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    // 更新最大子序列长度
    res = dp[i] > res ? dp[i] : res;
  }
  return res;
};

