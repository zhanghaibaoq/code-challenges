const canPermutePalindrome = s => {
    // 统计字符数量
    const map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    // 挑选出次数为奇数的
    const res = [...map].filter(item => item[1] & 1);
    return res.length <= 1;
};

var canPermutePalindrome1 = function (s) {
    const record = {};
    for (let i of s) record[i] = record[i] ? 0 : 1;
    return Object.values(record).filter(i => i) < 2;
};


// 如果set中有某字母，当该字母第二次出现的时候就在set中delete掉；如果没有该字母，就add进set中。
// 最后返回set中的size是否等于0或者1
var canPermutePalindrome2 = function (s) {
    const set = new Set();
    for (let str of s) {
        if (!set.has(str)) {
            set.add(str);
        } else {
            set.delete(str);
        }
    }
    return set.size === 1 || set.size === 0;
};
