// const arr = [1, 2, 1, 3, 4, 1, 2];
// const newArr = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// });
// const newArr2 = Array.from(new Set(arr));
// const newArr3 = [...new Set(arr)];
// const newArr4 = arr.reduce((prev, cur) => {
//     console.log('prev:', prev, '-- cur:', cur);
//     return prev.includes(cur) ? prev : [...prev, cur];
// }, []);


//定义链表节点类
// class ListNode {
//     constructor(val = 0) {
//         this.val = val; //当前节点的值
//         this.next = null; //指向下一个节点的指针，默认为null
//     }
// }

// //构建链表
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
// let node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// //输出链表
// let current = node1; //从头节点开始遍历
// while (current != null) { //一直遍历到链表末尾
//     console.log(current.val);
//     current = current.next; //指向下一个节点
// }

// 对象扁平化
// const obj = {
//     a: {
//         b: {
//             c: 1,
//             f: 2
//         }
//     },
//     d: {
//         e: 2
//     }
// };

// const flatten = (obj, prefix = '') => {
//     console.log('prefix:', prefix);
//     const res = {};
//     Object.keys(obj).forEach(key => {
//         console.log('key:', key);
//         console.log('res:', res);
//         if (typeof obj[key] === 'object') {
//             Object.assign(res, flatten(obj[key], prefix + key + '.'));
//             flatten(obj[key], prefix + key + '.')
//         } else {
//             res[prefix + key] = obj[key];
//             console.log('res2:', res);
//         }
//     });
//     return res;
// };
// console.log(flatten(obj));
// function flatten (obj) {
//     let res = {};
//     function flat (obj, pre) {// pre是前缀
//         for (let key in obj) {
//             if (typeof obj[key] === 'object') {
//                 flat(obj[key], pre ? pre + '.' + key : key);
//             } else {
//                 res[pre ? pre + '.' + key : key] = obj[key];
//             }
//         }
//     }
//     flat(obj);
//     return res;
// }
// function mynew (Func, ...args) {
//     // 1.创建一个新对象
//     const obj = {};
//     // 2.新对象原型指向构造函数原型对象
//     obj.__proto__ = Func.prototype;
//     // 3.将构建函数的this指向新对象
//     //通过apply 来执行  apply是改变this 并执行
//     let result = Func.apply(obj, args);
//     // 4.根据返回值判断
//     return result instanceof Object ? result : obj;
// }

// //测
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.say = function () {
//     console.log(this.name);
// };

// let p = mynew(Person, "huihui", 123);
// console.log(p); // Person {name: "huihui", age: 123}
// p.say(); // huihui

// const obj={
//   [Symbol('a')]:1,
//   'b':undefined,
//   'c':function(){},
// }
// console.log(Reflect.ownKeys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.keys(obj));
// /*
// [ 'b', 'c', Symbol(a) ]
// [ 'b', 'c' ]
// [ Symbol(a) ]
// [ 'b', 'c' ]
// */

// function objectFlat(obj = {}) {
//   const res = {}
//   function flat(item, preKey = '') {
//     Object.entries(item).forEach(([key, val]) => {
//       const newKey = preKey ? `${preKey}.${key}` : key
//       if (val && typeof val === 'object') {
//         flat(val, newKey)
//       } else {
//         res[newKey] = val
//       }
//     })
//   }
//   flat(obj)
//   return res
// }

// // 测试
// const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
// console.log(objectFlat(source));
// let str = "This is a test string with let343ters.";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   let char = str.charAt(i);
//   if (char < "A" || char > "z" || (char > "Z" && char < "a")) {
//     result += char;
//   }
// }

// var str = "a2119naskdna";
// var newStr = str.replace(/[a-z|A-Z]/g, '');
// console.log(newStr);


// const obj={
//   [Symbol('a')]:1,
//   'b':undefined,
//   'c':function(){},
// }
// console.log(Reflect.ownKeys(obj));


// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         let a = parseInt(tokens[0]);
//         let b = parseInt(tokens[1]);
//         console.log(a + b);
//     }
// }()


/* 
static修饰的属性和方法都是静态方法和属性,只能被类名调用,不能被实例化对象调用.同时也不能被子类继承,换句话说它属于当前这个类的.
原因是：
使用static声明的函数或属性是不能够被实例化对象所调用，
也不能被子类所继承，而仅仅属于这个类所使用（调用）。
*/
// 声明类
// class Boy {
//   //定义属性
//   static info = '见过你的美,还能爱上谁?';
//   // 定义方法
//   say () {
//     console.log('小姐姐,' + this.info);

//   }
//   // static 修饰的方法
//   static desc () {
//     console.log('小姐姐,我看见你就犯困...');

//   }
// }
// // 实例化类
// let b = new Boy;
// // 成功调用方法
// b.say();
// // 调用static修饰的方法
// // b.desc();
// Boy.desc();


// var a=0;
// var b=async()=>{
//   a=a+await 10;
//   console.log(a);
// }
// b();
// a++;
// console.log(a);
