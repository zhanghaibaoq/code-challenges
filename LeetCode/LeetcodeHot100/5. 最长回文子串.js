/**
 * @param {string} s
 * @return {string}
 */
// 笨方法
var longestPalindrome = function (s) {
  let res = s[0];
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let temp = s.slice(i, j + 1);
      if (temp.length > res.length && isPalindrome(temp)) {
        res = temp;
      }
    }
  }
  return res;
};
// 是否回文
const isPalindrome = (s) => {
  if (s.length < 2) return true;
  let [l, r] = [0, s.length - 1];
  while (l <= r)
    if (s[l++] !== s[r--]) return false;
  return true;
};
// 用下面这个会超出时间
const isPalindrome1 = (str) => {
  return str === str.split('').reverse().join('');
};

const isPalindrome2 = (str) => str.split('').every((item, index) => item === str[str.length - index - 1]);
//  return str.split('').every((item, index) => item === str.at(- 1 - index));

// 最长回文子串, 中心扩展法, 从中心向两边扩展, 返回最长回文子串
// 一种是回文子串长度为奇数（如aba，中心是b）
// 另一种回文子串长度为偶数（如abba，中心是b，b）
var longestPalindrome1 = function (s) {
  if (s.length < 2) return s;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    // 奇数
    let temp = helper(s, i, i);
    if (temp.length > res.length) res = temp;
    // 偶数
    temp = helper(s, i, i + 1);
    if (temp.length > res.length) res = temp;
  }
  return res;

};
// 从中心向两边扩展, 返回最长回文子串W
const helper = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
};



// 中心扩散法2
var longestPalindrome2 = function (s) {
  if (s.length < 2) {
    return s;
  }
  let res = '';
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }

  function helper (m, n) {
    while (m >= 0 && n < s.length && s[m] == s[n]) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // slice也要取[m+1,n-1]这个区间 
      res = s.slice(m + 1, n);
    }
  }
  return res;
};
