// 比较去重后的字符串长度和初始字符串的长度是否相等
const isUnique = str => {
    const arr = [...new Set(str.split(''))];
    return arr.length === str.length;
};

// 判断当前字符第一次出现的位置和最后一次出现的位置是否相等
const isUnique1 = (astr) => {
    for (const x of astr) {
        if (astr.indexOf(x) !== astr.lastIndexOf(x)) {
            return false;
        }
    }
    return true;
};

// 散列思想
const isUnique2 = (astr) => {
    let res = {};
    for (let i = 0; i < astr.length; i++) {
        if (res[astr[i]]) {
            return false;
        } else {
            res[i] = 1;
        }
    }
    return true;
};

console.log(isUnique2('leetcode'));