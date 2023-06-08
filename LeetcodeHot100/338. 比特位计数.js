const countBits = n => {
    const dp = [0];
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
    }
    return dp;
};

function countBits (n) {
    const ans = new Array(n + 1).fill(0); // 创建长度为 n+1 的数组，初始值为 0

    for (let i = 1; i <= n; i++) {
        // 使用动态规划递推公式计算每个数的二进制中 1 的个数
        
        // 对于当前的数 i，通过动态规划的方式，计算其二进制右移一位的数的 1 的个数，
        // 然后再加上 i 本身最低位的 1 的个数（通过 i & 1 获取）。
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
}