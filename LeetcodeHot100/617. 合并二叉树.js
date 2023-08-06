const mergeTrees = (root1, root2) => {
    // 递归出口：当前节点为空，返回另一个节点
    if (!root1) return root2;
    if (!root2) return root1;

    // 当前递归要操作的部分：将两个节点的值合并
    root1.val = root1.val + root2.val;

    // 进行递归
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    // 当前递归返回上一级的内容：root1，因为值都已合并到root1
    return root1;
};

var mergeTrees1 = function (t1, t2) {

    //如果两方树有一个为null，直接返回另一个树
    if (t1 == null) {
        return t2;
    } else if (t2 == null) {
        return t1;
    } else {
        //两个树都不为null 初始化一颗树 并为其left right赋值 根据执行顺序 碰到mergeTress 会先暂停代码 执行mergeTress执行完之后 继续向下执行 所以等赋值完成之后 才会返回这颗树
        let root = new TreeNode(t1.val + t2.val);
        root.left = mergeTrees(t1.left, t2.left);
        root.right = mergeTrees(t1.right, t2.right);
        return root;
    }

};
