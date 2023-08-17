/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // "/a/./b/../../c/"
  let stack = [];
  let paths = path.split('/');
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i];
    if (p == '..') {
      stack.pop();
    } else if (p && p !== '.') {
      stack.push(p);
    }
  }
  return '/' + stack.join('/');
};