const lengthOfLongestSubstring2 = s => {
    let arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s[i]);
        max = Math.max(arr.length, max);
    }
    return max;
};

var lengthOfLongestSubstring3 = function (s) {
    if (s.length < 2) return s.length;
    let max = 1;
    let right = 1;
    let arr = [s[0]];
    while (right < s.length) {
        if (arr.includes(s[right])) {
            // 超时：arr = arr.slice(arr.indexOf(s[right]));,  
            arr.splice(0, arr.indexOf(s[right]) + 1);
        }
        arr.push(s[right++]);
        max = Math.max(max, arr.length);
    }
    return max;
};

var lengthOfLongestSubstring5 = function (s) {
    let res = 0;
    let left = 0, right = 0;
    let set = new Set(); // 用 Set 来维护不含重复字符的子串
    while (right < s.length) {
        if (!set.has(s[right])) { // 如果新字符不在子串中
            set.add(s[right]); // 添加新字符到子串中
            right++; // 右指针右移
            res = Math.max(res, right - left); // 更新最长子串的长度
        } else { // 如果新字符在子串中
            set.delete(s[left]); // 删除左指针指向的字符
            left++; // 左指针右移
        }
    }
    return res;
};


//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2)
        return s.length;
    let res = 1;
    let [left, right] = [0, 1];
    let arr = [s[0]];
    while (right < s.length) {
        if (arr.includes(s[right])) {
            left++;
            arr.shift();
        } else {
            arr.push(s[right]);
            right++;
        }
        res = Math.max(right - left, res);//因为right-left+1是包含right的，所以这里不用+1
    }
    return res;
};


// 双指针
const lengthOfLongestSubstring1 = s => {
    // 左指针
    let left = 0;
    // 初始化最大长度
    let maxlen = 0;
    const map = new Map();
    // 定义右指针。遍历字符串
    for (let right = 0; right < s.length; right++) {
        // 如果右指针指向的字符在map中，并且右指针索引大于左指针索引
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            // 将左指针移动到重复字符的下一位
            left = map.get(s[right]) + 1;
        }
        // 更新最大长度
        maxlen = Math.max(maxlen, right - left + 1);
        // 存右指针的值和对应索引
        map.set(s[right], right);
    }
    return maxlen;
};




// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length & 1);// 意思是判断数组长度是奇数还是偶数

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key);// a b c
}
// for (let value of obj) {
//     console.log(value);// TypeError: obj is not iterable,因为对象不是可迭代对象,可迭代对象如 Array, Map, Set, String, TypedArray, 函数的 arguments 对象等
// }

// Set
const set = new Set([1, 2, 3]);
for (let value of set) {
    console.log(value);// 1 2 3
}

// arguments
function foo () {
    console.log(arguments);// { '0': 1, '1': 2, '2': 3 }

    for (let index in arguments) {
        console.log(index);// 0 1 2
    }
    for (let value of arguments) {
        console.log(value);
    }
    console.log(Array.from(arguments));// [ 1, 2, 3 ]
    console.log([...arguments]);// [ 1, 2, 3 ]
}
foo(1, 2, 3);// 1 2 3

// for in 会遍历原型链上的属性
function Foo () {
    this.a = 1;
}
Foo.prototype.b = 2;
const foo1 = new Foo();
for (let key in foo1) {
    console.log(key);// a b
}
