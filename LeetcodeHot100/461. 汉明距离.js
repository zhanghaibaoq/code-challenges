const hammingDistance = (x, y) => {
    let a = x ^ y;
    let count = 0;
    while (a) {
        a = a & (a - 1);
        count++;
    }
    return count;
};


var hammingDistance1 = function (x, y) {
    let a = x.toString(2);
    let b = y.toString(2);
    let res = 0;
    let maxLen = Math.max(a.length, b.length);
    b = b.padStart(maxLen, '0');
    a = a.padStart(maxLen, '0');
    for (let i = 0; i < maxLen; i++)
        if (a[i] !== b[i]) res++;
    return res;
};


// 要对比两个数二进制形态不同的位数，想到使用异或位运算，各位运算后相同的为0，不同的为1。
// 得到10进制结果后，转为二进制字符串，统计其中1的个数，即为汉明距离。
var hammingDistance2 = function(x, y) {
    return (x^y).toString(2).split('').filter(i => i === '1').length
};