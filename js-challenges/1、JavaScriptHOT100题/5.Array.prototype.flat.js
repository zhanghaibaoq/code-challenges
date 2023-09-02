const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
// console.log(arr.flat(Infinity));
// [1, 2, 3, 4, 5, 1, 2, 6, 7]

// console.log(arr.flat());
// [ 1, 2, 3, [ 4, 5 ], 1, 2, 6, 7 ]

Array.prototype.flat1 = function(depth = 1) {
  let res = [];
  const myFlat = (arr, depth) => {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        myFlat(item, depth - 1)
      } else {
        res.push(item)
      }
    })
  }

  myFlat(this, depth);
  return res;
}
// console.log(arr.flat1(1));

Array.prototype.flat2 = function(depth = 1) {
  let res = [];
  this.forEach((item) => {
    if (Array.isArray(item) && depth > 0) {
      res = res.concat(item.flat2(depth - 1));
    } else {
      res.push(item);
    }
  });
  return res;
};
// console.log(arr.flat2(Infinity));

Array.prototype.flat3 = function(depth = 1) {
  if (depth === Infinity) {
    depth = 20;
  }
  const queue = [...this];
  while (depth--) {
    for (let i = 0; i < queue.length; i++) {
      const head = queue.shift();
      if (Array.isArray(head)) {
        queue.push(...head);
      } else {
        queue.push(head);
      }
    }
  }
  return queue;
};
console.log(arr.flat3(Infinity));



const strFlat = (arr) => {
  return arr.toString().split(',').map(item => +item);
};
// console.log(strFlat(arr));

const flatten1 = arr => {
  return arr.reduce((prev, next) =>
    prev.concat(Array.isArray(next) ? flatten1(next) : next), []);
};
// console.log(flatten1(arr));

// 带depth参数的递归
const flatten2 = (arr, depth = 1) => {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) && depth > 1 ? flatten2(cur, depth - 1) : cur);
  }, []);
};
// console.log(flatten2(arr));