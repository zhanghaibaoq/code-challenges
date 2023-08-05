const countBits1 = n => {
    const dp = [0];
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
    }
    return dp;
};

function countBits2 (n) {
    const ans = new Array(n + 1).fill(0); // 创建长度为 n+1 的数组，初始值为 0

    for (let i = 1; i <= n; i++) {
        // 使用动态规划递推公式计算每个数的二进制中 1 的个数
        
        // 对于当前的数 i，通过动态规划的方式，计算其二进制右移一位的数的 1 的个数，
        // 然后再加上 i 本身最低位的 1 的个数（通过 i & 1 获取）。
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
}



const countBits3 = (n) => {
    const bits = new Array(n + 1).fill(0); // 初始化数组 bits，长度为 n+1，初始值为 0
    for (let i = 1; i <= n; i++) { // 遍历 [1, n] 区间的每个整数
        bits[i] = countOnes(i); // 计算每个整数的二进制中 "1" 的位数，并赋值给 bits
    }
    return bits; // 返回 bits
}

const countOnes = (x) => {
    let ones = 0; // 初始化一个变量来记录二进制中 "1" 的位数
    while (x > 0) { // 当输入的整数大于 0 时，继续循环
        x &= (x - 1); // 使用位操作将最低位的 "1" 置为 0，并将结果赋值给 x
        ones++; // 记录 "1" 的位数加一
    }
    return ones; // 返回 "1" 的位数
}

let x=96;
let y=x-1;
console.log(x.toString(2),y.toString(2),x&y,(x&y).toString(2));
