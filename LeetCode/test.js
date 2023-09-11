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

// function getContinuous (arr) {
//   let res = [];
//   let temp = [];
//   arr.forEach((item, index) => {
//       if (item + 1 === arr[index + 1]) {
//           temp.push(item);
//       } else {
//           temp.push(item);
//           res.push(temp);
//           temp = [];
//       }
//   });
//   return res;
// }

// // js 判断一组数字是否连续，当出现连续数字时用‘-’输出。例如：[1,2,3,4,6,7,8,10] 输出：1-4|6-8|10
// const arr = [1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 14];
// // 输出：1-4|6-8|10
// function getStr (arr) {
//   let str = '';
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 === arr[i + 1]) {
//       temp.push(arr[i]);
//     } else {
//       temp.push(arr[i]);
//       if (temp.length > 1) {
//         str += `${temp[0]}-${temp[temp.length - 1]}|`;
//       } else {
//         str += `${temp[0]}|`;
//       }
//       temp = [];
//     }
//   }
//   return str.slice(0, str.length - 1);
// }
// console.log('@@@0,',getStr(arr));
// console.log(getContinuous(arr));
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first, rest);
// // 对象

// function generateAllRedStrings(n, current = "", result = []) {
//   if (n === 0) {
//     result.push(current);
//     return;
//   }

//   // 递归生成字符串
//   generateAllRedStrings(n - 1, current + 'r', result);
//   generateAllRedStrings(n - 1, current + 'e', result);
//   generateAllRedStrings(n - 1, current + 'd', result);
// }

// // 示例用法
// const n = 3; // 设置字符串长度
// const allRedStrings = [];
// generateAllRedStrings(n, "", allRedStrings);
// console.log(allRedStrings); // 输出所有情况

// console.log(NaN == NaN);
// console.log(null == undefined);
// console.log(!![]);
// console.log([]==true);

// console.log(isNaN('1'));
// console.log([] instanceof Array);
// console.log(parseInt('1a')===1);


// function toggleCase(str) {
//   return str.replace(/[a-z]/gi, function(char) {
//     return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//   });
// }

// let result = toggleCase('Hello World!');
// console.log(result); // hELLO wORLD!
// console.log(parseInt('0x111'));//273,16进制转10进制

// function foo () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 200);
//     reject('errMsg');
//   });
// }
// foo().then(res => console.log(res)).catch(err => console.log(err)).then(res => console.log(res)).catch(err => console.log(err));

// function fn(nums, k, t) {
//   const numLen = nums.length;
//   for (let i = 0; i < numLen; i++) {
//     for (let j = i + 1; j <= i + k && j < numLen; j++) {
//       if (Math.abs(nums[i] - nums[j]) <= t) {
//         return true;
//       }
//     }
//   }
//   return false;
// }


// let nums = [1, 2, 3, 1], k = 3, t = 0;
// console.log(fn(nums, k, t)); // true
// 二叉树
// function countPathsWithOneMoreOne(root) {
//   if (!root) {
//       return 0;
//   }

//   let count = 0;

//   function dfs(node, ones, zeros) {
//       if (!node) {
//           return;
//       }

//       ones += node.val === 1 ? 1 : 0;
//       zeros += node.val === 0 ? 1 : 0;

//       if (!node.left && !node.right) {
//           if (ones === zeros + 1) {
//               count++;
//           }
//           return;
//       }

//       dfs(node.left, ones, zeros);
//       dfs(node.right, ones, zeros);
//   }

//   dfs(root, 0, 0);
//   return count;
// }

// // 示例用法
// const tree = {
//   val: 1,
//   left: {
//       val: 0,
//       left: {
//           val: 0,
//           left: null,
//           right: null
//       },
//       right: {
//           val: 1,
//           left: null,
//           right: null
//       }
//   },
//   right: {
//       val: 0,
//       left: null,
//       right: {
//           val: 1,
//           left: null,
//           right: null
//       }
//   }
// };

// console.log(countPathsWithOneMoreOne(tree))// 2

// function robot(command) {
//   let x = 0;
//   let y = 0;

//   for (let i = 0; i < command.length; i++) {
//     const direction = command[i];
//     const step = Number(command[++i]);
    
//     switch(direction) {
//       case 'e':
//         x += step;
//         break;
//       case 'w':
//         x -= step;
//         break;
//       case 'n':
//         y += step;
//         break;
//       case 's':
//         y -= step;
//         break;
//     }
//   }

//   return [x, y];
// }

// const command = 'e1s1w2n2';
// // console.log(robot(command)); 
// // 定义菜单树形结构数据
// let menuData = {
//   id: 0,
//   children: [
//     {
//       id: 1,

//     },
//     {
//       id: 2,
//     },
//     {
//       id: 3,
//       children: [
//         {
//           id: 4,
//         },
//         {
//           id: 5,
//         },
//       ],
//     },
    
//   ]
// }
// let permissonData = [1,2,3,4];

// function filterMenu(menu, permissions) {
//   const result = {...menu};
//   filterNode(result);
//   return result;
//   function filterNode(node) {
//     if (!node) return;
//     if (node.children) {
//       node.children = node.children.filter(child => {
//         const hasPermission = permissions.includes(child.id);
//         if (hasPermission) {
//           filterNode(child);
//           return true;
//         }
//         return false;
//       });
//     }
//   }

// }
// console.log(filterMenu(menuData, permissonData));// { id: 0, children: [ { id: 1 }, { id: 2 } ] }


// 读取菜单数据和用户权限列表
// const menuInput = prompt('请输入菜单数据：');
const userPermissionsInput = '1,2'

const menuData = {"id":"0","children":[{"id":"1"},{"id":"2"},{"id":"3"}]}
const userPermissions = new Set(userPermissionsInput.split(',').map(Number));

// 定义函数来过滤菜单树
function filterMenu(menu, userPermissions) {
  // 如果当前节点没有子节点，检查用户权限是否包含该节点的id
  if (!menu.children) {
    const menuId = parseInt(menu.id);
    return userPermissions.has(menuId);
  }

  // 如果当前节点有子节点，递归过滤子节点
  menu.children = menu.children.filter((child) => filterMenu(child, userPermissions));

  // 如果过滤后没有子节点，返回null，否则返回过滤后的子节点列表
  if (menu.children.length === 0) {
    return null;
  } else {
    return menu;
  }
}

// 过滤菜单树
const filteredMenu = filterMenu(menuData, userPermissions);

// 输出结果
console.log(JSON.stringify(filteredMenu));