// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Array.prototype._myMap = function (fn, context) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn.call(context, this[i], i, this));
  }
  return result;
};

Array.prototype.myMap = function (fn) {
  if (typeof fn !== "function") {
    throw Error('参数必须是一个函数');
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3];
const arr2 = arr.myMap(item => item * 2);
console.log(arr2); // [2, 4, 6]