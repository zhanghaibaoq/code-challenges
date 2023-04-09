
var longestCommonPrefix = function (strs) {
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    res += strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(res)) {
        return res.substring(0, res.length - 1);
      }
    }
  }
  return res;
};

const longestCommonPrefix1 = strs => {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const res = [];
  const base = strs[0];
  const others = strs.slice(1);

  for (let i = 0; i < base.length; i++) {
    const flag = others.every(item => item[i] === base[i]);
    if (flag) {
      res.push(base[i]);
    } else {
      break;
    }
  }

  return res.join('');
};