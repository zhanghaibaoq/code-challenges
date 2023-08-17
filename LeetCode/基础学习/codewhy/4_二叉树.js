// 二叉搜索树

// 节点类
class Node {
  constructor(key) {
    this.key = key; //节点值
    this.left = null; // 左侧子节点引用
    this.right = null; //右侧子节点引用
  }
}
// 二叉搜索树
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // 插入节点
  insert (key) {
    // 1.根据key创建节点
    const newNode = new Node(key);
    // 2.判断根节点是否存在
    if (!this.root) {
      this.root = newNode; 
    } else {
      insertNode(this.root, newNode);
    }
    function insertNode (node, newNode) {
      // 往左边查找插入
      if (newNode.key < node.key) {
        // 左子节点为空，直接插入(同时作为递归结束条件)
        if (node.left === null) {
          node.left = newNode;
        } else {// // 左子节点非空，则问题变成了比较左子节点和新节点决定插入位置，递归调用即可
          insertNode(node.left, newNode);
        }
      } else {// 往右边查找插入
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }
  }
  
// https://juejin.cn/post/7146975493278367752#heading-22
  insert2(data) {
    var node = new Node(data);
    // 创建根节点
    if (!this.root) {
      this.root = node;
      return;
    }
    var current = this.root;
    var parent = null;
    while (current) {
      parent = current;
      // 值比父节点小，放到父节点的左子树上
      if (data < parent.data) {
        current = current.left;
        // 找到最左侧的节点，将新的节点设置为该节点的左子树节点
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        // 值比父节点大，放到父节点的右子树上
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  }

  // dfs 深度优先遍历 递归
  dfs (root) {
    if (root == null) return;
    console.log(root.key);
    this.dfs(root.left);
    this.dfs(root.right);
  }

  // dfs 深度优先遍历 迭代
  dfs2 (root) {
    if (root == null) return;
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();
      console.log(node.key);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  // bfs 广度优先遍历 迭代
  bfs (root) {
    if (root == null) return;
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      console.log(node.key);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  // 前序遍历，先根节点，再左子树，再右子树
  preOrderTraverse (callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node != null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };
    preOrderTraverseNode(this.root, callback);
  }

  // 中序遍历, 先左子树，再根节点，再右子树
  inOrderTraverse (callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node != null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };
    inOrderTraverseNode(this.root, callback);
  }

  // 后序遍历, 先左子树，再右子树，再根节点
  postOrderTraverse (callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node != null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };
    postOrderTraverseNode(this.root, callback);
  }

  // 最小值
  min () {
    let node = this.root;
    while (node && node.left != null) {
      node = node.left;
    }
    return node.key;
  }

  // 最大值
  max () {
    let node = this.root;
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  }

  // 递归搜索特定值
  search (key) {
    const searchNode = (node, key) => {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    };
    return searchNode(this.root, key);
  }

  // 迭代搜索特定值
  search2 (key) {
    let node = this.root;
    while (node != null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }


  // 删除节点，通过循环迭代实现
  // 删除节点
  remove (key) {

    let currentNode = this.root;
    let parentNode = null;
    let isLeftChild = true;

    // 循环查找到要删除的节点 currentNode，以及它的 parentNode、isLeftChild
    while (currentNode.key !== key) {

      parentNode = currentNode;

      // 小于，往左查找
      if (key < currentNode.key) {
        isLeftChild = true;
        currentNode = currentNode.left;

      } else {  // 否则往右查找
        isLeftChild = false;
        currentNode = currentNode.right;
      }

      // 找到最后都没找到相等的节点，返回 false
      if (currentNode === null) {
        return false;
      }

    }


    // 1、删除的是叶子节点的情况
    if (currentNode.left === null && currentNode.right === null) {

      if (currentNode === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parentNode.left = null;
      } else {
        parentNode.right = null;
      }


      // 2、删除的是只有一个子节点的节点
    } else if (currentNode.right === null) { // currentNode 只存在左节点
      //-- 2.1、currentNode 只存在<左节点>的情况
      //---- 2.1.1、currentNode 等于 root
      //---- 2.1.2、parentNode.left 等于 currentNode
      //---- 2.1.3、parentNode.right 等于 currentNode

      if (currentNode === this.root) {
        this.root = currentNode.left;
      } else if (isLeftChild) {
        parentNode.left = currentNode.left;
      } else {
        parentNode.right = currentNode.left;
      }

    } else if (currentNode.left === null) { // currentNode 只存在右节点
      //-- 2.2、currentNode 只存在<右节点>的情况
      //---- 2.1.1 currentNode 等于 root
      //---- 2.1.1 parentNode.left 等于 currentNode
      //---- 2.1.1 parentNode.right 等于 currentNode

      if (currentNode === this.root) {
        this.root = currentNode.right;
      } else if (isLeftChild) {
        parentNode.left = currentNode.right;
      } else {
        parentNode.right = currentNode.right;
      }


      // 3、删除的是有两个子节点的节点
    } else {

      // 1、找到后续节点
      let successor = this.getSuccessor(currentNode);

      // 2、判断是否为根节点
      if (currentNode === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parentNode.left = successor;
      } else {
        parentNode.right = successor;
      }

      // 3、将后续的左节点改为被删除的左节点
      successor.left = currentNode.left;
    }
  }

  // 获取后续节点，即从要删除的节点的右边开始查找最小的值
  getSuccessor (delNode) {

    // 定义变量，保存要找到的后续
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    // 循环查找 current 的右子树节点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 判断寻找到的后续节点是否直接就是要删除节点的 right
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }


}
let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
console.log(tree);
console.log(tree.preOrderTraverse((key) => console.log(key)));

console.log(tree.min());// 3
console.log(tree.max());// 15

console.log(tree.search(1));// false
console.log(tree.search(15));// true

console.log(tree.search2(1));// false
console.log(tree.search2(15));// true