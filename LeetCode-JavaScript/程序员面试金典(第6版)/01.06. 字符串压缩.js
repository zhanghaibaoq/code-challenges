const compressString = S => {
    // 将第一个字符放入数组，并设其个数为1
    const arr = [S[0], 1];
    const len = S.length;
    for (let i = 1; i < len; i++) {
        if (S[i] === S[i - 1]) {
            // 如果当前字符和前一个字符相等，则数量+1
            arr[arr.length - 1]++;
        } else {
            // 不相等，将当前字符和数量放入数组末尾
            arr.push(S[i], 1);
        }
    }
    return arr.length < len ? arr.join('') : S;
};

// me
var compressString1 = function (S) {
    const arr = [...S];
    let res = [];
    let count = 1;
    if (arr.length < 2)
        return S;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            res.push(arr[i - 1]);
            res.push(count);
            count = 1;
        }
        if (i === (arr.length - 1)) {
            res.push(arr[i]);
            res.push(count);
        }
    }
    return res.length < arr.length ? res.join('') : S;
};

/* 
i:相同字符串的头部索引
j:当前字符的指针，比较 arr[j + 1] 和 arr[i]

相同：i 不变，j++
不同：i 变为下一个相同字符串的开头，即j+1。整理后得到下面的代码
*/
/**
 * @param {string} S
 * @return {string}
 */
var compressString2 = function (S) {
    let arr = S.split("");
    let res = '';
    for (i = 0, j = 0; j < arr.length; j++) {
        if (arr[j + 1] !== arr[i]) {
            res += arr[i] + (j + 1 - i);
            i = j + 1;
        }
    }
    return (S.length > res.length) ? res : S;
};
