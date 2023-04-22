const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: [
            {
              val: 'f',
              children: []
            }
          ]
        }
      ]
    },
    {
      val: 'c',
      children: [
        null,
        {
          val: 'g',
          children: []
        }
      ]
    }
  ],
}
/* 

tree的结构如下：
    a
   / \
   b  c
  / \  \ 
 d  e   g
/
f    

*/

// 深度优先遍历 
const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(child => {
    if (child) dfs(child)
  })
  // for (let i = 0; i < root.children.length; i++) {
  //   const child = root.children[i]
  //   if (child) dfs(child)
  // }
}
// dfs(tree)  // 输出：a b d e f c g

// 广度优先遍历:使用一个队列 q，将根节点入队列，循环遍历队列，每次取出队列首节点，输出其值，然后将其子节点依次入队列。
const bfs = (root) => {
  const q = [root]
  while (q.length > 0) {
    const n = q.shift()
    console.log(n.val)
    n.children.forEach(child => {
      if (child) q.push(child)
    })
  }
}
// bfs(tree)  // 输出：a b c d e g f


// 二叉树
const tree1 = {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  },
  right: {
    val: 10,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null
    }
  }
}
/* 
 树的结构如下：
     8
   /   \
   6   10
  / \    \
 5   7    11
*/


// 二叉树的前序遍历--递归 根左右
const prrderTraversal = (root) => {
  const res = []
  const preOrder = (root) => {
    if (!root) return
    res.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
  preOrder(root)
  return res
}
// console.log(preorderTraversal(tree1))  // 输出：[ 8, 6, 5, 7, 10, 11 ]

// 二叉树的前序遍历--迭代
// 使用一个栈 stack，初始时栈中有一个节点 root。每次迭代弹出栈顶节点，将其孩子节点压入栈中，但要注意先压右孩子再压左孩子。
const preorderTraversal1 = (root) => {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length > 0) {
    const n = stack.pop()
    res.push(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
  return res
}
// console.log(preorderTraversal1(tree1))  // 输出：[ 8, 6, 5, 7, 10, 11 ]

// 二叉树的中序遍历--递归 左根右
const inorderTraversal = (root) => {
  const res = []
  const inorder = (root) => {
    if (!root) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
// console.log(inorderTraversal(tree1))  // 输出：[ 5, 6, 7, 8, 10, 11 ]

// 二叉树的中序遍历--迭代 
// 先将 root 节点入栈stack，然后不断遍历栈，如果栈顶有节点，就将它出栈并将它的左右孩子依次入栈，如果栈顶没有节点，遍历结束。
const inorderTraversal1 = (root) => {
  if (!root) return []
  const res = []
  const stack = []
  let p = root
  while (stack.length > 0 || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  return res
}
// console.log(inorderTraversal1(tree1))  // 输出：[ 5, 6, 7, 8, 10, 11 ]、

// 二叉树的后序遍历--递归
const postorderTraversal = (root) => {
  const res = []
  const postorder = (root) => {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    res.push(root.val)
  }
  postorder(root)
  return res
}
// console.log(postorderTraversal(tree1))  // 输出：[ 5, 7, 6, 11, 10, 8 ]

// 二叉树的后序遍历--迭代 左右根
const postorderTraversal1 = (root) => {
  if (!root) return []
  const res = []
  const stack = [root]
  while (stack.length > 0) {
    const n = stack.pop()
    res.unshift(n.val)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }
  return res
}
// console.log(postorderTraversal1(tree1))  // 输出：[ 5, 7, 6, 11, 10, 8 ]


// 把二叉树打印成多行/二叉树的层序遍历
const printTree = (root) => {
  if (!root) return []
  const q = [root]
  const res = []
  while (q.length > 0) {
    const level = []
    const size = q.length
    for (let i = 0; i < size; i++) {
      const n = q.shift()
      level.push(n.val)
      if (n.left) q.push(n.left)
      if (n.right) q.push(n.right)
    }
    res.push(level)
  }
  return res
}
// console.log(printTree(tree1)) // 输出：[ [ 8 ], [ 6, 10 ], [ 5, 7, 11 ] ]

// 二叉树的最大深度
const maxDepth = (root) => {
  if (!root) return 0
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)
  return Math.max(left, right) + 1
}
// console.log(maxDepth(tree1))  // 输出：3

// 二叉树的最大深度
const maxDepth1 = (root) => {
  if (!root) return 0
  const q = [[root, 1]] // 二叉树节点和对应的深度
  let depth = 0
  while (q.length > 0) {
    const [n, d] = q.shift() // n 为当前节点，d 为当前节点的深度
    depth = Math.max(depth, d) // 取最大深度
    if (n.left) q.push([n.left, d + 1]) // 左子树入队，深度 + 1
    if (n.right) q.push([n.right, d + 1])
  }
  return depth
}


// 二叉树的最小深度
const minDepth = (root) => {
  if (!root) return 0
  if (!root.left) return minDepth(root.right) + 1 // 左子树为空，返回右子树的最小深度 + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1 // 左右子树都不为空，返回左右子树最小深度的较小值 + 1
}
// console.log(minDepth(tree1))  // 输出：3
// 二叉树的最小深度 遍历到第一个叶子节点的时候，就是最小深度
const minDepth1 = (root) => {
  if (!root) return 0
  const q = [[root, 1]] // 二叉树节点 + 层级
  while (q.length > 0) {
    const [n, l] = q.shift() // n 节点，l 层级
    if (!n.left && !n.right) return l // 遇到第一个叶子节点，直接返回层级
    if (n.left) q.push([n.left, l + 1]) // 左子树不为空，入队
    if (n.right) q.push([n.right, l + 1]) // 右子树不为空，入队
  }
}
// console.log(minDepth1(tree1))  // 输出：3


// 翻转二叉树——递归
const invertTree = (root) => {
  if (!root) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}
// console.log(invertTree(tree1))

// 翻转二叉树——迭代 在遍历树的过程中，交换当前层级下的左右子树
const invertTree1 = (root) => {
  if (!root) return null
  const q = [root]
  while (q.length > 0) {
    const n = q.shift()
    const temp = n.left
    n.left = n.right
    n.right = temp
    if (n.left) q.push(n.left)
    if (n.right) q.push(n.right)
  }
  return root
}
// console.log(invertTree1(tree1))


// 对称的二叉树
const isSymmetric = (root) => {
  if (!root) return true
  const check = (p, q) => {
    // 两个空树，true
    if (!p && !q) return true
    // 只有一个空树
    if (!p || !q) return false
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
  }
  return check(root.left, root.right)
}
// console.log(isSymmetric(tree1))  // 输出：false


// 二叉树的直径：任意两个节点路径长度中的最大值
const diameterOfBinaryTree = (root) => {
  if (!root) return 0
  let res = 1 // 默认为根节点的路径长度
  const dfs = (root) => {
    if (!root) return 0
    let L = dfs(root.left)  // 左子树深度，上图为例，最长L为2
    let R = dfs(root.right)  // 右子树深度，上图为例，最长R为1
    res = Math.max(res, L + R + 1) // 最大L+R+1，+1为根节点，总共深度为4，即节点树为4
    return Math.max(L, R) + 1  // 包含根节点的深度，上图为例，最长L为2，最长R为1
  }
  dfs(root)
  return res - 1 // 最终结果要得到直径为3
}
// console.log(diameterOfBinaryTree(tree1))  // 输出：3


// 二叉树的镜像
const mirrorTree = (root) => {
  if (!root) return root
  const left = mirrorTree(root.left)
  const right = mirrorTree(root.right)
  root.left = right
  root.right = left
  return root
}
// console.log(mirrorTree(tree1))

// 优化下
const mirrorTree1 = (root) => {
  if (!root) return root
  [root.left, root.right] = [mirrorTree1(root.right), mirrorTree1(root.left)]
  return root
}


// 二叉树的最近公共祖先-递归
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (!left) return right
  if (!right) return left
  return root
}
// console.log(lowestCommonAncestor(tree1, tree1.left.left, tree1.right.left)) 


// 二叉树的所有路径
const binaryTreePaths = root => {
  // 返回的数组
  const res = [];
  // 定义获得路径的函数
  const getPath = (root, path) => {
      // 当前节点有值
      if (root) {
          // path加上当前节点的值
          path += root.val.toString();
          if (!root.left && !root.right) {
              // 当前节点送是叶子节点
              // 将路径放入到res
              res.push(path);
          } else {
              // 不是叶子节点，加上'->'，递归遍历
              path += '->';
              getPath(root.left, path);
              getPath(root.right, path);
          }
      }
  };
  // path一开始为空
  getPath(root, '');
  return res;
};
// console.log(binaryTreePaths(tree1))  // 输出：[ '8->6->5', '8->6->7', '8->10->11' ]


//  二叉树中的最大路径和
const maxPathSum = (root) => {
  let res = -Infinity; // 或者Number.MIN_SAFE_INTEGER
  const dfs = root => {
    if (!root) return 0;
    // 左右子树返回的路径和，若小于0则置0，表示舍去这条路径
    const left = Math.max(0, dfs(root.left));
    const right = Math.max(0, dfs(root.right));
    res = Math.max(res, root.val + left + right);
    // 返回上一级递归，只能选左右子树中较大的那一条路径
    return Math.max(left, right) + root.val;
  };
  dfs(root);
  return res;
};
// console.log(maxPathSum(tree1))  // 输出：31
