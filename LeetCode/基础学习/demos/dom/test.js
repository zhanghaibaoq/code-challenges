// console.log(typeof null);
// console.log((2).constructor === Number);//true,constructor是一个属性，指向构造函数
// console.log(typeof Object); // function,因为Object是一个函数
// console.log(typeof []);//object,数组是对象的一种
// let n1 = 0.1, n2 = 0.2;
// console.log((n1 + n2).toFixed(2));//0.30
// console.log(null === null);//true
// console.log(Number(null));//0
// console.log(Object.is(null, null));//true  //使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。
// const arr1 = [1, 2];
// const arr2 = [...arr1];
// console.log(arr1 == arr2);//false,因为是两个不同的数组
// console.log([...'hello']);//["h", "e", "l", "l", "o"]
// console.log('hello'.split(''));//["h", "e", "l", "l", "o"]

// const school = {
//   classes: {
//     stu: {
//       name: 'Bob',
//       age: 24,
//     }
//   }
// };
// const { classes: { stu: { name: name1 } } } = school;
// console.log(name1);  // 'Bob'

// const son = 'haha';
// const father = 'xixi haha hehe';
// console.log(father.indexOf(son));//5
// console.log(father.includes(son));//true
// console.log(father.startsWith(son));//false
// console.log(father.endsWith(son));//true

// const sourceCode = 'repeat for 3 times;';
// const repeated = sourceCode.repeat(3);
// console.log(repeated); // 'repeat for 3 times;repeat for 3 times;repeat for 3 times;'
// const repeated2 = sourceCode.repeat(3.5);
// console.log(repeated2); // 'repeat for 3 times;repeat for 3 times;repeat for 3 times;'

// const map = new Map();
// map.set('name', 'Bob');
// map.set('age', 24);
// map.forEach((value, key) => {
//   console.log(key, value);//name Bob age 24
// });
// console.log(Array.from(map));//[["name", "Bob"], ["age", 24]]
// console.log(map.get('name')); // 'Bob'
// console.log(map.has('name')); // true
// console.log(map.size); // 2
// for (let [key, value] of map) {
//   console.log(key, value);
// }
// //name Bob  
// //age 24

// for (let [key, value] of map.entries()) {
//   console.log(key, value);
// }
// //name Bob  
// //age 24

// for (let items of map.entries()) {
//   console.log(items);
// }
// //["name", "Bob"] ["age", 24]

// map.forEach((value, key) => {
//   console.log(key, value);
// });
// //name Bob
// //age 24

// for (let key of map.keys()) {
//   console.log(key);//name age
// }

// for (let value of map.values()) {
//   console.log(value);//Bob 24
// }
// console.log(map.keys()); // MapIterator {"name", "age"}
// console.log(map.values()); // MapIterator {"Bob", 24}
// console.log(map.entries()); //[Map Entries] { [ 'name', 'Bob' ], [ 'age', 24 ] }
// console.log(map.delete('name')); // true
// console.log(map);//Map(1) {"age" => 24}
// console.log(map.clear()); // undefined
// console.log(map.size); // 0

// const set = new Set();
// set.add('Bob').add(24);
// console.log(Array.from(set));//["Bob", 24]
// console.log(set.has('Bob')); // true
// console.log(set.size); // 2
// for (let item of set) {
//   console.log(item); //Bob 24
// }
// set.forEach((value, key) => {
//   console.log(key, value);//Bob Bob 24 24 ,因为Set中的key和value是一样的
// }
// );
// console.log(set.keys()); // [Set Iterator] { 'Bob', 24 }
// console.log(set.values()); // SetIterator {"Bob", 24}
// console.log(set.entries()); // [Set Entries] { [ 'Bob', 'Bob' ], [ 24, 24 ] }
// console.log(set.delete('Bob')); // true
// console.log(set.clear()); // undefined
// console.log(set.size); // 0

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.find((item) => item > 3)); // 4
// console.log(arr.findIndex((item) => item > 2)); // 2
// console.log(arr.includes(3)); // true
// console.log(arr.includes(6)); // false
// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(6)); // -1
// console.log(arr.lastIndexOf(3)); // 2
// console.log(arr.lastIndexOf(6)); // -1
// console.log(arr.join('')); // 12345
// console.log(arr.join('-')); // 1-2-3-4-5
// console.log(arr);//[1, 2, 3, 4, 5]
// console.log(arr.slice(1, 3)); // [2, 3]
// console.log(arr);//[1, 2, 3, 4, 5]
// console.log(arr.slice(1)); // [2, 3, 4, 5]
// console.log(arr.slice(-2)); // [4, 5]
// console.log(arr.slice(1, -2)); // [2, 3]
// console.log(arr.slice(-2, -1)); // [4]
// console.log(arr.concat([6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr);//[1, 2, 3, 4, 5]
// console.log(arr.concat([6, 7, 8], [9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr);//[1, 2, 3, 4, 5]
// console.log(arr.splice(1, 2)); // [2, 3] //删除
// console.log(arr);//[1, 4, 5]
// console.log(arr.splice(1, 0, 2, 3)); // [] //插入
// console.log(arr);//[1, 2, 3, 4, 5]
// console.log(arr.splice(1, 1, 6, 7)); // [2] //替换
// console.log(arr);//[1, 6, 7, 3, 4, 5]
// console.log(arr.reverse()); // [5, 4, 3, 7, 6, 1]
// console.log(arr);//[5, 4, 3, 7, 6, 1]
// console.log(arr.reduce((prev, cur) => prev + cur)); // 26
// console.log(arr.reduce((prev, cur) => prev + cur, 10)); // 36 //初始值是10 ,prev=10,cur=5，prev=15,cur=4，prev=19,cur=3，prev=22,cur=7，prev=29,cur=6，prev=35,cur=1，prev=36
// console.log(arr.reduceRight((prev, cur) => prev + cur)); // 26
// console.log(arr.reduceRight((prev, cur) => prev + cur, 10)); // 36 //从右到左
// console.log(arr);//[5, 4, 3, 7, 6, 1]

// 对象的扩展
// const obj = {
//   name: 'Bob',
//   age: 24
// };

// for (let key in obj) {
//   console.log(key, obj[key]);//name Bob age 24
// }
// // for (let [key, value] of obj) {
// //   console.log(key, value);//报错,obj is not iterable
// // }
// for (let key of Object.keys(obj)) {
//   console.log(key, obj[key]);//name Bob age 24
// }
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);//name Bob age 24
// }
// console.log(obj.name); // Bob
// console.log(obj['name']); // Bob
// console.log(obj.hasOwnProperty('name')); // true
// console.log(Object.keys(obj)); // ["name", "age"]
// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key]);//name Bob age 24
// });
// console.log(Object.values(obj)); // ["Bob", 24]
// Object.getOwnPropertyNames(obj); // ["name", "age"],返回对象自身的所有属性的属性名
// // 判断是否是空对象
// console.log(Object.keys(obj).length === 0); // false
// console.log(Object.values(obj)); // ["Bob", 24]
// console.log(Object.entries(obj)); // [Array(2), Array(2)]
// console.log(Object.entries(obj)[0]); // ["name", "Bob"]
// obj.name = 'Alice';
// console.log(obj); // {name: "Alice", age: 24}
// Object.assign(obj, { age: 25, 'address': 'beijing' }, { 'from': 'shanghai' });
// console.log(obj); // {name: "Alice", age: 25, address: "beijing", from: "shanghai"}
// delete obj.name;
// console.log(obj.name); // undefined
// console.log(obj); // {age: 25, address: "beijing", from: "shanghai"}
// // Object.is()用来比较两个值是否严格相等
// Object.is('foo', 'foo');     // true
// Object.is({}, {})           // false
//   // 不同于 === 之处
//   + 0 === -0;                   //true
// NaN === NaN;                     // false
// Object.is(+0, -0);           // false
// Object.is(NaN, NaN);         // true
// console.log(obj); // {age: 25, address: "beijing", from: "shanghai"}
// Object.freeze(obj);
// obj.age = 26;
// console.log(obj); // {age: 25, address: "beijing", from: "shanghai"}
// console.log(Object.isFrozen(obj)); // true

// // valueOf()方法返回指定对象的原始值
// // toString()方法返回一个表示该对象的字符串
// const obj1 = {
//   name: 'Bob',
//   age: 24,
//   valueOf () {
//     return 100;
//   },
//   toString () {
//     return 'hello';
//   }
// };
// console.log(obj1 + 1); // 101
// console.log(obj1 + '1'); // hello1
// console.log(obj1.toString()); // hello
// console.log(obj1.valueOf()); // 100
// console.log(obj1); // {name: "Bob", age: 24, valueOf: ƒ, toString: ƒ}


// console.log(111 && 222);//222
// console.log(111 || 222);//111
// console.log(0 && 222);//0
// console.log(0 || 222);//222
// console.log(0 || 0);//0
// console.log(0 && 0);//0
// console.log(111 && 0);//0
// console.log(111 || 0);//111
// console.log(111 && 222 && 333);//333
// console.log(111 || 222 || 333);//111
// console.log(111 && 222 || 333);//222
// console.log(111 || 222 && 333);//111
// // ??空值合并操作符,当左侧值为 null 或 undefined 时，返回 ?? 符号右边的值
// console.log(111 ?? 222);//111
// console.log(0 ?? 222);//0
// console.log(111 ?? 0);//111
// console.log(111 ?? 222 ?? 333);//111
// console.log(0 ?? 222 ?? 333);//0
// console.log(null ?? 0);//0
// console.log(undefined ?? 10);//10
// console.log(111 & 222);//78,按位与
// console.log(111 | 222);//255,按位或
// console.log(111 ^ 222);//177,按位异或
// console.log(~111);//-112,按位取反
// console.log(111 << 2);//444 //111*2*2,各二进制位全部左移若干位，高位丢弃，低位补0
// console.log(111 >> 2);//27 //各二进制位全部右移若干位，正数高位补0，负数高位补1,右移n位就是除以2的n次方z,111/2/2=27.75
// console.log(111 >>> 2);//27 //无符号右移,忽略符号位，空位都以0补齐,正数和负数都是一样的
// console.log(-111 >> 2);//-28 //负数右移，高位补1

// var obj = {
//   0: 'one',
//   1: 'two',
//   length: 2
// };
// obj = Array.from(obj);
// console.log(obj);//[ 'one', 'two' ]
// for (var k of obj) {
//   console.log(k);
// }

// let arr4 = [1, 2, 3, 4, 5, 6];
// console.log(Object.keys(arr4)); //[ '0', '1', '2', '3', '4', '5' ]
// let person = { name: "张三", age: 25, address: "深圳", getName: function () { } };
// Object.keys(person).map((key) => {
//   console.log(person[key]); // 获取到属性对应的值，做一些处理  //张三 25 深圳 ƒ () { }
// });

// var name = '小明', age = 20;
// var obj = {
//   name: "小张",
//   objAge: this.age,
//   myFun: function () {
//     console.log(this.name + '年龄' + this.age);
//   }
// };
// console.log(obj.objAge);

// var array1 = [12, "foo", { name: "Joe" }, -2458];
// var array2 = ["Doe", 555, 100];
// console.log(Array.prototype.push === array2.push); //true
// Array.prototype.push.apply(array1, array2);//返回返回合并后的数组长度 ,array1被改变
// console.log(array1);//[ 12, 'foo', { name: 'Joe' }, -2458, 'Doe', 555, 100 ]

// console.log([1, 2, 3].at(1));//2
// console.log([1, 2, 3].at(-1));//3
// concat()方法：array1.concat(array2)
// 扩展运算符：[…array1, …array2]
// push()+扩展运算符：array1.push(…array2)
// Array.prototype.push.apply(array1, array2) 
//  */
// // apply() 方法可以将数组型参数扩展成参数列表，对于一些需要多个参数的方法，使用 apply() 可以将数组作为参数
// //Math.max()求一组数中的最大值
// var max = Math.max(1, 2, 3);
// console.log(max);   //3
// //Math.max.apply()求数组中的最大值
// // 第一个参数（null）无关紧要," ",0 都行,只是为了让 apply() 方法的第二个参数（数组）成为 Math.max() 方法的参数
// var max = Math.max.apply(null, [1, 2, 3]);   //等同于：var max = Math.max(...[1, 2, 3])
// var max2 = Math.max.apply(Math, [1, 2, 3]);   //等同于：var max = Math.max(...[1, 2, 3])
// var max3 = Math.max.call(Math, 1, 2, 3);   //等同于：var max = Math.max(...[1, 2, 3])
// console.log(max, max2, max3);   //3 3 3

// let jsonArray = [];
// for (let i = 0; i < 100000; i++) { jsonArray.push({ id: i, name: '名' + i }); }
// jsonArray.push({ id: 10, name: '重复' });
// jsonArray.push({ id: 100, name: '重复' });
// jsonArray.push({ id: 1000, name: '重复' });
// jsonArray.push({ id: 10000, name: '重复' });
// jsonArray.push({ id: 20000, name: '重复' });
// jsonArray.push({ id: 30000, name: '重复' });
// jsonArray.push({ id: 40000, name: '重复' });
// jsonArray.push({ id: 50000, name: '重复' });
// jsonArray.push({ id: 60000, name: '重复' });
// jsonArray.push({ id: 70000, name: '重复' });
// console.log(jsonArray.length);//100010
// let resultArray = [], itemIds = {};
// console.time();
// jsonArray.forEach((item) => {
//   if (!itemIds[item.id]) {
//     itemIds[item.id] = true;
//     resultArray.push(item);
//   }
// });
// itemIds = null;//释放内存
// console.timeEnd();//default: 5.315ms;
// console.log(resultArray.length);//100000

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.constructor);//[Function: Array]
// console.log(typeof arr); //object
// console.log(arr instanceof Array); //true
// console.log(Array.isArray(arr)); //true
// console.log(Object.prototype.toString.call(arr)); //[object Array]
// console.log(arr.constructor === Array); //true
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.constructor === Array); //true
// console.log(arr.__proto__.__proto__ === Object.prototype); //true
// console.log(arr.__proto__.__proto__.constructor === Object); //true

// console.log(typeof typeof 1); //string
// // console.log(setInterval(() => console.log('Hi'), 1000)); //返回一个定时器的ID


/*
setTimeout(code, milliseconds, param1, param2, ...)
setTimeout(function, milliseconds, param1, param2, ...)
param1, param2, ... 可选。向函数传递的参数。
返回一个 ID（数字），可以将这个ID传递给 clearTimeout() 来取消执行。
 */
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one"); //500毫秒后执行res方法, 并将"one"作为参数传入, 也就是说, 500毫秒后, firstPromise的状态变为fulfilled, 并且值为"one"
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));//two

// var arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr11.sort(() =>
//   Math.random() - 0.5
// );
// console.log(arr11);

// function unique (arr) {
//   return arr.filter(function (item, index, arr) {
//     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//     return arr.indexOf(item, 0) === index;//indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
//   });
// }
// var ar = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
// console.log(unique(ar));

// Promise.resolve('foo').then((res) => {
//   console.log(res);//foo
//   return Promise.resolve('bar');//返回一个新的Promise对象, 状态为fulfilled, 值为bar
// }).then((res) => {
//   console.log(res);//bar
// });