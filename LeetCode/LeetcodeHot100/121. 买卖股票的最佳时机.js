const maxProfit = prices => {
    // 先定义第一天为最低价格
    let min = prices[0];
    // 利润
    let profit = 0;
    // 遍历数据
    for (let i = 1; i < prices.length; i++) {
        // 如果发现比最低价格还低的，更新最低价格
        min = Math.min(min, prices[i]);
        // 如果发现当前利润比之前高的，更新利润
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};

const maxProfit1 = prices => {
    const len = prices.length;
    // 创建dp数组
    const dp = new Array(len).fill([0, 0]);
    // dp数组初始化
    dp[0] = [-prices[0], 0];
    for (let i = 1; i < len; i++) {
        // 更新dp[i]
        dp[i] = [
            Math.max(dp[i - 1][0], -prices[i]),
            Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
        ];
    }
    return dp[len - 1][1];
};

//时间复杂度O(n) 空间复杂度O(n)，dp数组第二维是常数
const maxProfit2 = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));

    dp[0][0] = 0; //第0天不持有
    dp[0][1] = -prices[0]; //第0天持有

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }

    return dp[n - 1][0];
};
