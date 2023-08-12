// const dailyTemperatures = temperatures => {
//     const res = [];
//     const len = temperatures.length;
//     // 遍历每日温度
//     for (let i = 0; i < len; i++) {
//         let high = i;
//         // 找下一个高温
//         for (let j = i + 1; j < len; j++) {
//             if (temperatures[j] > temperatures[i]) {
//                 high = j;
//                 break;
//             }
//         }
//         res.push(high - i);
//     }
//     return res;
// };

const dailyTemperatures = T => {
    const n = T.length;
    const res = new Array(n).fill(0);
    // 递减栈（存放下标）
    const stack = [0];
    for (let i = 1; i < n; i++) {
        // 当前温度大于栈顶元素的温度
        while (T[i] > T[stack[stack.length - 1]]) {
            // 栈顶元素出栈
            const topIndex = stack.pop();
            // 更新栈顶位置的 后一个更高温度天数
            res[topIndex] = i - topIndex;
        }
        // 当前索引入栈
        stack.push(i);
    }
    return res;
};
