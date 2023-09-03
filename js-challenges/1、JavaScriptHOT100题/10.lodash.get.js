
function getKey (obj, str) {
  const arr = str.split('.');
  let res = obj;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (/\[\d+\]/.test(key)) {
      const index = key.match(/\d+/)[0];
      res = res[key.replace(/\[\d+\]/, '')][index];
    } else {
      res = res[key];
    }
  }
  return res;

}
const obj = {
  a: {
    b: 123
  },
  arr: [
    {
      c: 'c'
    },
    {
      d: [
        {
          e: 'e'
        }
      ]
    }

  ]
};
console.log(getKey(obj, 'a.b'));
console.log(getKey(obj, 'arr[0].c'));
console.log(getKey(obj, 'arr[1].d[0].e'));

