/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // for(let i=0;i<n;i++){
  //     if(n===1) return true;
  //     if(2<<i == n) return true;
  //     if(2<<i > n) return false;
  // }
  // return false;

  // 如果n是正整数并且n & (n - 1) = 0，那么n就是2的幂。    https://leetcode.cn/problems/power-of-two/solution/power-of-two-er-jin-zhi-ji-jian-by-jyd/
  return n > 0 && (n & (n - 1)) === 0;
};