// 递归，超时
var climbStairs = function (n) {
    if(n<3) return n;
    return climbStairs(n-1)+climbStairs(n-2);
};

// 动态规划
const climbStairs1 = n => {
    const dp = [null, 1, 2];
    if (n <= 2) return dp[n];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

// 迭代
const climbStairs2 = n => {
    if (n <= 2) return n;
    let pre = 1, cur = 2;//pre倒数第二个数，cur倒数第一个数
    for (let i = 3; i <= n; i++) {
        // let temp = pre;
        // pre = cur;
        // cur = cur + temp;

        [pre, cur] = [cur, pre + cur];
    }
    return cur;
}

// 记忆化递归, 
const climbStairs3 = n => {
    const memo = [null, 1, 2];
    const helper = n => {
        if (memo[n]) return memo[n];
        memo[n] = helper(n - 1) + helper(n - 2);
        return memo[n];
    }
    return helper(n);
}

console.time('test'); 
console.log(climbStairs3(9000))
console.timeEnd('test');