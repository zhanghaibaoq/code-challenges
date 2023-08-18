// https://www.bilibili.com/video/BV1cy4y167mM/?vd_source=eac7ee3e188e81d32edf392ab1aa352c
/* 


回溯法的搜索过程就是一个树型结构的遍历过程，for循环用来横向遍历，递归的过程是纵向遍历。

let result=[]
function backtracking(参数) {
    if (终止条件/满足条件) {
        存放结果;
        return;
    }
 
    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;// 单层逻辑
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }

*/
const letterCombinations = digits => { // 定义函数 letterCombinations，它接受一个字符串参数 digits
  if (!digits) return []; // 如果 digits 为空，则返回一个空数组
  const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']; // 定义一个映射表 map，用于存储数字和字母的对应关系
  const res = []; // 定义一个空数组 res，用于存储所有字母组合
  const backTracking = (path, i) => { // 定义一个回溯函数 backTracking，它接受两个参数：当前路径 path 和当前数字的索引 i
    if (i >= digits.length) { // 如果当前数字的索引超出了 digits 的长度，则说明已经找到了一种字母组合，将其加入 res 数组
      res.push(path);
      return;
    }
    const letters = map[digits[i]]; // 根据当前数字，从映射表中获取对应的字母集合
    for (const char of letters) { // 遍历字母集合中的每一个字母
      backTracking(`${path}${char}`, i + 1); // 将当前字母加入路径中，递归调用回溯函数，继续查找下一个数字对应的字母集合
    }
  };

  backTracking('', 0); // 调用回溯函数，开始查找所有字母组合
  return res; // 返回包含所有字母组合的数组
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
// console.log(letterCombinations('23'));

//方法3 使用reduce
const letterCombinations2 = digits => {
  if (!digits) return [];
  
  function combine(str1, str2) {
    const res = [];
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        res.push(str1[i] + str2[j]);
      }
    }
    return res;
  }

  const map = [null, null, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res = digits.split('').map(item => map[item]).reduce((prev, cur) => {
    return combine(prev, cur);
  }, ['']);
  return res;
};
console.log(letterCombinations2('2'));
