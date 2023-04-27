/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 //bfs
 var levelOrder = function (root) {
  if (root === null) return []
  const res = [];
  const q = [root];
  while (q.length) {
      const n = q.shift();
      res.push(n.val);
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
  }
  return res;
};