// 总体思路是：从 n-1 推导出 n 的组合情况，只需要遍历 n-1 的所有组合，并在所有组合的每个位置填入一对括号 () 并去重即可。
// https://leetcode.cn/problems/generate-parentheses/solutions/1279821/jian-dan-gao-xiao-si-lu-tian-kong-qu-zho-q1mx/?envType=featured-list&envId=2cktkvj%3FenvType%3Dfeatured-list&envId=2cktkvj
/* 
n=1时，组合情况仅一种：["()"]
n=2时
遍历 n=1 的组合情况 ["()"]
对于情况 "()"，在该字符串每个位置填入一对括号 () 后得到：["()()","(())","()()"]
去重得到最终组合情况为：["()()","(())"]
*/
var generateParenthesis2 = function (n) {
    let set = new Set(['()']);
    for (let c = 2; c <= n; c++) {
        let nextSet = new Set();
        for (const s of set) {
            for (let j = 0; j < s.length; j++) {
                nextSet.add(s.slice(0, j) + '()' + s.slice(j));
            }
        }
        console.log(nextSet);
        set = nextSet;
    }
    return [...set];
};


/* 
    递归dfs
    思路：采用递归，终止条件是字符串的长度等于2n，递归函数传入构建的字符串，左右括号剩余多少，每个位置有两种选择，
    选择左或者右括号，这里可以进行剪枝优化，只有右括号的保有数量大于左括号的保有数量，才能选右括号，否则肯定不能构成有效括号
*/
const generateParenthesis = (n) => {
    const res = []; // 输出的结果数组
    const generate = (str, left, right) => {
        console.log(str, left, right);
        if (str.length == 2 * n) { // 字符串构建完成
            res.push(str);           // 将字符串加入res
            return;                  // 结束当前递归（结束当前搜索分支）
        }
        if (left > 0) {            // 只要左括号有剩，可以选它，继续递归做选择
            generate(str + '(', left - 1, right);
        }
        if (right > left) {        // 右括号的保有数量大于左括号的保有数量，才能选右括号
            generate(str + ')', left, right - 1);
        }
    };

    generate('', n, n); // 递归的入口，初始字符串是空字符串，初始括号数量都是n
    return res;
};

const generateParenthesis1 = n => {
    if (!n) return [''];
    const res = [];
    const dfs = (str, left, right) => {
        // 去除无效的括号组合
        // 左括号数量不能过半
        // 右括号数量不能超过左括号，因为右括号不能在对应的左括号之前出现
        if (left > n || right > left) return;
        // 生成了n对有效括号，放入res数组
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        // 下一个追加左括号，左括号数量+1
        dfs(`${str}(`, left + 1, right);
        // 下一个追加右括号，右括号数量+1
        dfs(`${str})`, left, right + 1);
    };
    dfs('', 0, 0);
    return res;
};


console.log('res:', generateParenthesis2(3));