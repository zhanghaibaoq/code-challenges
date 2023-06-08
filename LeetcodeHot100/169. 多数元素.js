// 方法一：抵消
// const majorityElement = nums => {
//     let count = 1;
//     let majority = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (count === 0) {
//             majority = nums[i];
//         }
//         if (nums[i] === majority) {
//             count++;
//         } else {
//             count--;
//         }
//     }
//     return majority;
// };

// 栈抵消：
const majorityElement = nums => {
    let stack = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        // 如果栈空，则直接入栈，跳过此轮循环
        if (stack.length === 0) {
            stack.push(nums[i]);
            continue;
        }

        if (stack[stack.length - 1] === nums[i]) {
            // 相等入栈
            stack.push(nums[i]);
        } else {
            // 不相等出栈
            stack.pop();
        }
    }
    // 返回栈顶元素
    return stack[stack.length - 1];
};

// 方法二：排序后取中值
// const majorityElement = nums => {
//     nums.sort((a, b) => a - b);
//     return nums[Math.floor(nums.length / 2)];
// };


// var majorityElement2 = function (nums) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             map.set(nums[i], map.get(nums[i])+1);
//         } else {
//             map.set(nums[i], 1)
//         }
//     }
//     let res = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
//     return res[0]
// };