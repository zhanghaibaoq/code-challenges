/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.list = [[], [], []];
  this.length = stackSize;
};

/** 
* @param {number} stackNum 
* @param {number} value
* @return {void}
*/
TripleInOne.prototype.push = function (stackNum, value) {

  if (!this.length) return null;

  if (this.list[stackNum].length === this.length) return null;

  this.list[stackNum].push(value);

};

/** 
* @param {number} stackNum
* @return {number}
*/
TripleInOne.prototype.pop = function (stackNum) {
  if (!this.length || !this.list[stackNum].length) return -1;

  return this.list[stackNum].pop();
};

/** 
* @param {number} stackNum
* @return {number}
*/
TripleInOne.prototype.peek = function (stackNum) {
  if (!this.length || !this.list[stackNum].length) return -1;

  return this.list[stackNum][this.list[stackNum].length - 1];
};

/** 
* @param {number} stackNum
* @return {boolean}
*/
TripleInOne.prototype.isEmpty = function (stackNum) {
  return !this.list[stackNum].length;
};

/**
* Your TripleInOne object will be instantiated and called as such:
* var obj = new TripleInOne(stackSize)
* obj.push(stackNum,value)
* var param_2 = obj.pop(stackNum)
* var param_3 = obj.peek(stackNum)
* var param_4 = obj.isEmpty(stackNum)
*/

const tripleInOne = new TripleInOne(4);
tripleInOne.push(0, 1);
tripleInOne.push(0, 2);
tripleInOne.push(0, 3);
tripleInOne.push(0, 4);
console.log(tripleInOne.pop(0));// 4
console.log(tripleInOne);// TripleInOne { list: [ [ 1, 2, 3 ], [], [] ], length: 4 }
