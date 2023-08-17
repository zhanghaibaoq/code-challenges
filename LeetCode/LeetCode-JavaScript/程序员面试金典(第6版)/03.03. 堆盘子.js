/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.stack = [];//存栈的数组
  this.cap = cap;//每个栈最大长度的值
};

/** 
* @param {number} val
* @return {void}
*/
StackOfPlates.prototype.push = function (val) {
  if (this.cap === 0) return;
  if (this.stack.length >= 1 && this.stack[this.stack.length - 1].length < this.cap) {
    this.stack[this.stack.length - 1].push(val);
  } else {
    this.stack.push([val]);
  }
};

/**
* @return {number}
*/
StackOfPlates.prototype.pop = function () {
  return this.popAt(this.stack.length - 1);
};

/** 
* @param {number} index
* @return {number}
*/
StackOfPlates.prototype.popAt = function (index) {
  if (index < 0 || index > this.stack.length - 1) return -1;
  let res = this.stack[index].pop();
  if (this.stack[index].length === 0) {
    this.stack.splice(index, 1);
  };
  return res;
};

/**
* Your StackOfPlates object will be instantiated and called as such:
* var obj = new StackOfPlates(cap)
* obj.push(val)
* var param_2 = obj.pop()
* var param_3 = obj.popAt(index)
*/