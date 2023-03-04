/*
 * @Author: huang
 * @Date: 2022-09-27 22:29:54
 * @Description: ctr win i /t
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root)
    return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


//////////////////////////////////////////
// https://www.jb51.net/article/255306.htm
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        { value: 'E', children: null },
        { value: 'F', children: null },
      ],
    },
    {
      value: 'C',
      children: [{ value: 'G', children: null }],
    },
    {
      value: 'D',
      children: [
        { value: 'H', children: null },
        { value: 'I', children: null },
      ],
    },
  ],
};
function dfs (root) {
  console.log(root.value);
  root.children && root.children.forEach(dfs); // 与下面一致
  // if (root.children) {
  //   root.children.forEach(child => {
  //     dfs(child)
  //   })
  // }
}
dfs(tree); // 这个tree就是前面定义的那个树
/* 结果
A
B
E
F
C
G
D
H
I
*/
function bfs (root) {
  // 1. 新建队列 跟节点入队
  const q = [root];
  // 4 重复执行
  while (q.length > 0) {
    const node = q.shift(); // 2 队头出队
    console.log(node.value);
    // 3 队头 children 依次入队
    node.children &&
      node.children.forEach(child => {
        q.push(child);
      });
  }
}
bfs(tree);
/* 结果
A
B
C
D
E
F
G
H
I
*/
/////////////////////////////////////////