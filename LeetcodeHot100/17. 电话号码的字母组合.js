// https://www.bilibili.com/video/BV1cy4y167mM/?vd_source=eac7ee3e188e81d32edf392ab1aa352c
/* 
回溯法的搜索过程就是一个树型结构的遍历过程，for循环用来横向遍历，递归的过程是纵向遍历。

let result=[]
function backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }
 
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }

*/
const letterCombinations = digits => {
  if (!digits) return [];
  const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res = [];

  const backTracking = (path, i) => { // path是路径，i是第几个数字
    if (i >= digits.length) {
      res.push(path);
      return;
    }
    const letters = map[digits[i]];
    for (const char of letters) {
      backTracking(`${path}${char}`, i + 1);
    }
  };

  backTracking('', 0);
  return res;
};

var letterCombinations1 = function (digits) {
  const k = digits.length;
  //0-9代表不同的字符，正好用数组存储方便
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  if (k === 0) return [];
  if (k === 1) return map[digits].split('');
  let res = [], path = [];//path用来存储每次的结果
  backTracking(digits, k, 0);//从第0个数字开始,
  return res;

  //1.确定参数，首先是输入的电话号码，其次它的长度，最后是到第几个了
  //2.终止条件，到最后一个号码，存进去
  //3.单层遍历是每一个号码，下一层是后一个号码
  function backTracking (n, k, a) {
    if (path.length === k) {
      res.push(path.join(''));
      return;
    }
    for (const m of map[n[a]]) {
      path.push(m);
      backTracking(n, k, a + 1);
      path.pop();
    }
  }

};

// 测试
console.log(letterCombinations1('234'));