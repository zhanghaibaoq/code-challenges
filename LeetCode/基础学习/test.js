class Chameleon {
  static colorChange (newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
// freddie.colorChange('orange');
console.log(Chameleon.colorChange());


// setTimeout(function () {
//   const p = new Promise(function (r, j) {
//     console.log(1);
//     r();
//   });
//   p.then(() => {
//     console.log(2);
//   });
//   console.log(3);
// }, 1000);
// const np = new Promise((r, j) => {
//   console.log(5);
//   r();
// }).then(() => {
//   setTimeout(function () {
//     console.log(6);
//   }, 0);
//   return 7;
// }).then(n => {
//   console.log(n);
// });
// console.log(4);


const numbers = [3, 6, 9];
const numbersCopy = Array.from(numbers);

console.log(numbers === numbersCopy); // => false

// const a = [1, 2, 3];
// const b = a;
// console.log(a === b); // => true


// https://mp.weixin.qq.com/s/QFERrX0VSwr2gMBlSNiJkg
const typeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
console.log(typeOf(1)); // => 'number'
// console.log(typeOf('')); // => 'string'
// console.log(typeOf(true)); // => 'boolean'
// console.log(typeOf(null)); // => 'null'
// console.log(typeOf(undefined)); // => 'undefined'
// console.log(typeOf({})); // => 'object'


const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
};
console.log(hideMobile('13800138000'));// => 138****8000

// 解析url参数
const parseUrl = (url) => {
  const params = {};
  const arr = url.split('?')[1].split('&');
  arr.forEach((item) => {
    const temp = item.split('=');
    params[temp[0]] = temp[1];
  });
  return params;
};

const getSearchParams = () => {
  const searchPar = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
};

// i是var声明的，在全局范围内都有效，全局只有一个变量i，输出的是最后一轮的i值，也就是 10
var a1 = [];
for (var i = 0; i < 10; i++) {
  a1[i] = function () {
    console.log(i);
  };
}
a1[0]("0");  // 10

// 案例2
// 用let声明i，for循环体内部是一个单独的块级作用域，相互独立，不会相互覆盖
var a2 = [];
for (let i = 0; i < 10; i++) {
  a2[i] = function () {
    console.log(i);
  };
}
a2[0]("0"); // 0


let aa = 10;
const bb = 20;
function foo () {
  console.log(this.aa);  // undefined
  console.log(this.bb);  // undefined
}
foo();
// console.log(window.aa); // undefined  

function getAge (...args) {
  console.log(args); //[ 21 ]
  console.log(typeof args);
}

getAge(21, 22);//object

console.log(...['apple', 'banana', 'car']);
// apple banana car

console.log('apple', ...['banana', 'car', 'door']);
// apple banana car door

var arr1 = ['hello'];
var arr2 = [...arr1];
console.log(arr2);  // ['hello']
console.log(arr1 == arr2);//false //数组是引用类型，所以 arr1 和 arr2 是两个不同的数组，所以 arr1 == arr2 的结果是 false。

const obj = { a: 'one', b: 'two', a: 'three' };
for (let key in obj) {
  console.log(key, obj[key]);//a three b two
}
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);//a three b two
}
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);//a three b two
}
console.log(Object.values(obj));//["three", "two"]

// for (const x of obj) {
// console.log(x); //for of不支持普通对象，想遍历对象的属性，可以用for in循环, 或内建的Object.keys()方法：
// }

console.log(obj.hasOwnProperty('a'));//true

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456
console.log(a);//{ '[object Object]': 456 }


let obj1 = {
  name: "小明",
  age: 19,
  sayHello: function (job, hobby) {
    console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
    console.log(arguments);
    console.log(this);
  }
};
obj1.sayHello('程序员', '开心');   //运行结果 ： 我叫小明,今年19岁。我的工作是: 程序员，我的爱好是: 开心。
let obj11 = {
  name: "末晨曦吖",
  age: 18
};
//call修改this指向了 obj1
obj1.sayHello.call(obj11, '前端', '要开心吖');  //运行结果 ：我叫末晨曦吖,今年18岁。我的工作是: 前端，我的爱好是: 要开心吖。

let s1 = '123';
console.log(parseInt(s1));//123
console.log(Number(s1));//123
console.log(+s1);//123
console.log(s1 - 0);//123

// let a = 123456789;
// // 计算a的位数
// console.log(a.toString().length);//9

let s2 = '123';
console.log(s2[0]);//1
console.log(s2.charAt(0));//1


// 手写map
Array.prototype._map = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
    console.log(callback(this[i], i, this));
  }
  return arr;
};
let testArr = [1, 2, 3];
let newArr = testArr._map((item, index, arr) => {
  // console.log(item, index, arr);
  return item * 3;
}
);
console.log(newArr);


var aaa = 1;
function foo () {
  console.log('aaa:', this.aaa);
}
foo();
const o = {
  aaa: 2,
  foo: foo
};
o.foo();