const maxArrayValue = (nums) => {
  const len = nums.length;

  for (let i = len - 1; i > 0; i--) {
    if (nums[i] >= nums[i - 1]) {
      nums[i - 1] += nums[i];
    }
  }
  console.log(nums);
  return Math.max(...nums);
};
const nums = [2,3,7,9,3];
console.log(maxArrayValue(nums));