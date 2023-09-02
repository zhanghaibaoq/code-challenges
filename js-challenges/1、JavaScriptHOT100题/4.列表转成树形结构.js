let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 6, name: '部门6', pid: 0 },
];

// * 方法1 递归
const arrayToTree1 = (data, pid, res) => {
  data.forEach((item) => {
    if (item.pid === pid) res.push(item);
  });

  res.forEach((item) => {
    item.children = [];
    arrayToTree1(data, item.id, item.children);
  });

  return res;
};
// console.log(arrayToTree1(arr, 0, []));

// * 方法2 
const arrToTree2 = (arr) => {
  const res = [];
  // 逗号操作符允许在一行代码中从左到右依次执行多个操作,并返回最后一个操作的结果
  const map = arr.reduce((pre, cur) => (pre[cur.id] = cur, pre), {});
  for (let item of arr) {
    if (item.pid == 0) {
      res.push(map[item.id]);
    }
    else {
      let parent = map[item.pid];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;

  /* 
  const map = {};
  const res = [];
  data.forEach((item) => {
    map[item.id] = { ...item, children: [] };
  });

  data.forEach((item) => {
    const treeItem = map[item.id];
    if (treeItem.pid !== 0) map[item.pid].children.push(treeItem);
    else res.push(treeItem);
  });
  return res;
  */

};
// console.log(arrToTree2(arr));

// * 方法3
const arrToTree3 = (arr) => {
  const map = {},res = [];
  //先根据pid排个序,这是个树形结构,pid越小说明越上层
  arr.sort((a, b) => a.pid - b.pid);
  arr.forEach((item) => {
    map[item.id] = { ...item, children: [] };
    if (item.pid === 0) res.push(map[item.id]);
    else map[item.pid].children.push(map[item.id]);
  })
  return res;
}
// console.log(arrToTree3(arr));
