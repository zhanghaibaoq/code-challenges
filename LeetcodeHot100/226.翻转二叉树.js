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
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (root === null) {
    return root;
  }

  // 递归子问题
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);

console.log(7 / 2); //3.5，不是3
// 之保留整数
console.log(7 >> 1); //3