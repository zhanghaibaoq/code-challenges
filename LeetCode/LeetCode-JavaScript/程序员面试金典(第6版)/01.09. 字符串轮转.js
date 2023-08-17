/* 
如果 s2 位 s1 旋转而成，那么一定满足
s2 的长度===s1 的长度
s2 肯定为 s1 + s1 的子集
*/
const isFlipedString = (s1, s2) => s1.length === s2.length && `${s2}${s2}`.indexOf(s1) !== -1;
// return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
// return s1.length === s2.length ? s1.repeat(2).includes(s2) : false;