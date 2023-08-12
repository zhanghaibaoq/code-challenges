const oneEditAway = (str1, str2) => {
  // 计算两长度差值diff
  const [len1, len2] = [str1.length, str2.length];
  const diff = Math.abs(len1 - len2);
  if (diff === 0) {
    // 长度相等，若有两个字符不一致，则false
    let k = 0;
    for (let i = 0; i < len1; i++) {
      if (str1[i] !== str2[i]) k++;
      if (k >= 2) return false;
    }
    return true;
  } else if (diff === 1) {
    // 长度相差1，判断是否只是多了一个字符
    const len = Math.min(len1, len2);
    const longStr = len1 > len2 ? str1 : str2;
    const shortStr = len1 < len2 ? str1 : str2;
    let k = 0;
    for (let i = 0, j = 0; i < len, j < len; i++, j++) {
      if (longStr[i] !== shortStr[j]) {
        if (longStr[i + 1] !== shortStr[j]) {
          return false;
        }
        k++;
        i++;
      }
      if (k >= 2) return false;
    }
    return true;
  } else {
    // 其他情况，肯定是false
    return false;
  }
};

// me
var oneEditAway1 = function (first, second) {
  let len1 = first.length, len2 = second.length;
  let left1 = 0, left2 = 0;
  let res = 0;
  if (Math.abs(len1 - len2) > 1)
    return false;
  if (len1 === len2) {
    for (let i = 0; i < len1; i++) {
      if (first[left1++] !== second[left2++]) {
        res++;
      }
    }
    return res === 1 || res === 0;
  }
  const len = Math.max(len1, len2);
  for (let i = 0; i < len; i++) {
    if (first[left1++] !== second[left2++]) {
      if (len1 > len2) {
        left2--;
      } else {
        left1--;
      }
      res++;
    }
  }
  return res === 1;
};
console.log(oneEditAway1("islander", "slander"));
