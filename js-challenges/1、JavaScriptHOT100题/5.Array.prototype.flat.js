const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
// console.log(arr.flat(Infinity));
// [1, 2, 3, 4, 5, 1, 2, 6, 7]

// console.log(arr.flat());
// [1, 2, 3, [4, 5], 1, 2, [6, 7]]



const flatten = arr => {
  return arr.reduce((prev, next) =>
    prev.concat(Array.isArray(next) ? flatten(next) : next), []);
};
console.log(flatten(arr));
// 带depth参数的递归
const flattenDepth = (arr, depth = 1) => {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) && depth > 1 ? flattenDepth(next, depth - 1) : next);
  }, []);
};
