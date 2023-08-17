var maxDepth = function (root) {
  if (!root)
    return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


// https://www.jb51.net/article/255306.htm