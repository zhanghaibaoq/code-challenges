// https://dragon-liu.github.io/javascript-datastructures-algorithms/md/5.%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97.html#%E6%B5%8B%E8%AF%95%E4%BB%A3%E7%A0%81
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



///////////////////
class Person {
  // 在类中可以添加一个特殊的方法constructor
  // 该方法我们称为构造函数（构造方法）
  // 构造函数会在我们调用类创建对象时执行
  constructor(name, age, gender) {
    // console.log("构造函数执行了~", name, age, gender)
    // 可以在构造函数中，为实例属性进行赋值
    // 在构造函数中，this表示当前所创建的对象
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const p1 = new Person("孙悟空", 18, "男");
const p2 = new Person("猪八戒", 28, "男");
const p3 = new Person("沙和尚", 38, "男");

console.log(p1);
console.log(p2);
console.log(p3);
////////////////////////

class Person1 {
  // constructor() {
  //     this.name = "孙悟空"; // Person的实例属性name p1.name
  //     this.age = 18;       // 实例属性只能通过实例访问 p1.age
  // }
  name = "孙悟空"; // Person的实例属性name p1.name
  age = 18;       // 实例属性只能通过实例访问 p1.age
  static test = "test静态属性"; // 使用static声明的属性，是静态属性（类属性） Person.test
  static hh = "静态属性";   // 静态属性只能通过类去访问 Person.hh

}
// const p1 = new Person("孙悟空", 18, "男"); 这样是失效的！！！
const p11 = new Person1();
const p22 = new Person1();
console.log(p1);
console.log(p2);


//////////////////////////
