function deepClone (obj, visited = new Set()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (visited.has(obj)) {
    return obj;
  }
  visited.add(obj);
  const copy = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], visited);
  });

  return copy;
}
let obj = {
  name: 'fx',
  age: 18,
  address: {
    city: 'beijing'
  },
  arr: [1, 2, 3, 4, 5]
};

const source = {
  h: '123', a: { b: { c: 1 } }, f: [1, 2],
};
const target = deepClone(source);
console.log(target);
target.a.b.c = 2111111;
target.source = source;
console.log(target);
console.log(source); 