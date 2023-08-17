/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => new RegExp(`^${p}$`).test(s);
// ^表示开头, $表示结尾, test()方法用于检测一个字符串是否匹配某个模式, 如果字符串中含有与RegExp对象匹配的文本，则返回true，否则返回false
