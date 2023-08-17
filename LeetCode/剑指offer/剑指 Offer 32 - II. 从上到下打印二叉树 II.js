/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//  bfs
var levelOrder = function (root) {
  if (root === null) return []
  const res = [];
  const q = [root];//队列
  while (q.length) {
      const level = [];
      const size = q.length;
      for (let i = 0; i < size; i++) {
          const n = q.shift();
          level.push(n.val)
          if (n.left) q.push(n.left)
          if (n.right) q.push(n.right)
      }
      res.push(level)
  }
  return res;
};