function myInstanceof (left, right) {
  if (!['function', 'object'].includes(typeof left) || left === null) return false;
  let proto = left.__proto__;
  const prototype = right.prototype;

  // 如果对象原型为null，说明已经到达原型链的顶端，还未找到，返回false
  while (proto) {
    if (proto === prototype) return true;
    proto = proto.__proto__;
  }

  return false;
}

const arr = [];
console.log(myInstanceof(arr, Number));
console.log(myInstanceof(arr, Object));
console.log(myInstanceof(arr, Array));
console.log(myInstanceof(arr, Map));