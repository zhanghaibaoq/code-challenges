// https://www.bilibili.com/video/BV1x7411L7Q7?p=20&spm_id_from=pageDriver&vd_source=eac7ee3e188e81d32edf392ab1aa352c

// es5中类的写法
function Stack () {
  this.items = [];
  // push
  // 方法一,这种写法不好,因为每次都要创建一个新的对象,浪费内存
  this.push = function (element) {
    this.items.push(element);
  };
  // 推荐方法二,这种写法好,共享，因为只是改变了原来的对象,没有创建新的对象
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
}

// es6的类写法，使用class关键字，构造函数使用constructor关键字，其他方法不需要function关键字
class StackArray {
  // 用数组来保存栈内元素
  constructor() {
    this.items = [];
  }

  // 这些方法都是原型对象的方法，所以可以直接通过原型对象来添加方法
  // 1.添加一个（或几个）新元素到栈顶
  push (element) {
    this.items.push(element);
  }

  // 2.移除栈顶的元素，同时返回被移除的元素
  pop () {
    return this.items.pop();
  }

  // 3.返回栈顶的元素，不对栈做任何修改
  peek () {
    return this.items[this.items.length - 1];
  }

  // 4.判断栈是否为空，如果栈里没有任何元素就返回true，否则返回false
  isEmpty () {
    return this.items.length === 0;
  }

  // 5.获取栈中元素个数
  size () {
    return this.items.length;
  }

  // 6.移除栈里所有元素
  clear () {
    this.items = [];
  }

  // 7.toString方法
  toString () {
    // let resultString = '';
    // for (const item of this.items) {
    //   resultString += item + ' ';
    // }
    // return resultString;
    return this.items.toString();
  }
}
let stack = new StackArray();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();// 4

///////////////////////////////////////

// 十进制转二进制
function decimalToBinary (decNumber) {
  let remStack = new StackArray();

  while (decNumber > 0) {
    remStack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }

  let binaryString = '';
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop();
  }
  return binaryString;
}
console.log(decimalToBinary(10));// 1010
console.log(decimalToBinary(9999));// 10011100001111

console.log(10..toString(2));// 1010
console.log(11 % 2);// 1
console.log(11 / 2);// 5.5

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const p1 = new Person("孙悟空", 18, "男");
console.log(p1);
console.log(10..toString(2));// 1010
console.log(10..toString(8));//
let a = 10;
console.log(Number(`${a}.`).toString(2));// 1010