var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {

      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }


  }
};
const nums = [2, 7, 11, 15];
const target = 9;
const twosum = twoSum(nums, target)
console.log(twosum)
