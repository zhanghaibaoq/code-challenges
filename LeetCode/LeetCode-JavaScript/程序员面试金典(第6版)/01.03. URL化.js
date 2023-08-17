const replaceSpaces = (S, length) => {
    const arr = S.split('');
    for (let i = 0; i < length; i++) {
        if (arr[i] === ' ') arr[i] = '%20';
    }
    return arr.slice(0, length).join('');
};

var replaceSpaces1 = function (S, length) {
    return S.slice(0, length).replaceAll(" ", "%20");
};

https://leetcode.cn/problems/string-to-url-lcci/solution/jssan-chong-yi-xing-jie-fa-xiang-jie-by-giao-z/
var replaceSpaces2 = function (S, length) {
    return encodeURI(S.substring(0, length));
};