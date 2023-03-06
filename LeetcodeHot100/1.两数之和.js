/* 
 暴力 :时间 O(n^2) 空间O(1)
*/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] === target - nums[j])
        return [i, j];
};

/* 时间：O(n) 空间O(n) */
var twoSum2 = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(obj);
    let temp = target - nums[i];
    if (temp in obj) {
      return [i, obj[temp]];
    } else {
      obj[nums[i]] = i;
    }
  }
};
// 测试对象的 in 操作符，用于判断对象是否包含某个属性，返回布尔值
// const obj = { a: 1, b: 2 };
// console.log('a' in obj); // true
// console.log('c' in obj); // false

const twoSum3 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (map.has(temp)) {
      return [map.get(temp), i]; //Map.get(key)方法返回的是键所对应的值,如果不存在则会返回undefined
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

/////////////////////////////////////////////////////////////////////////////////
// Tips：map和数组可以互相转换
let arr = [[1, 2], [3, 4]];
let map1 = new Map(arr);
map1.set(5, 6);
console.log(map1); // Map { 1 => 2, 3 => 4, 5 => 6 }
let arr2 = Array.from(map1);
console.log(arr2); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

//map的使用	
const map = new Map([
  ["a", 111],
  ["b", 222],
]);
console.log(map);//Map { 'a' => 111, 'b' => 222 }
console.log([...map]); // [ [ 'a', 111 ], [ 'b', 222 ] ]
console.log(map.size);//2
console.log(map.get("a"));//111
map.set("c", 333);
console.log(map.size);//3
console.log(map.has("c"));//true
console.log(map.delete("c"));//true
console.log(map.size);//2
map.clear();//清空map
console.log(map.size);//0


//map的迭代
console.log(map.keys());//MapIterator { 'a', 'b' }

for (let key of map.keys()) {
  console.log(key);//a b
}

for (let value of map.values()) {
  console.log(value);//111 222
}
for (let item of map.entries()) {//entries()方法返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的[key, value]数组。
  console.log(item);//[ 'a', 111 ] [ 'b', 222 ]
}
for (let [key, value] of map.entries()) {
  console.log(key, value);//a 111 b 222
}

//set 用法
let arr1 = [1, 2, 3, 4, 4];
const set = new Set(arr1);//左侧代码也展示了一种去除数组重复成员的方法。
//可以使用add()方法向 Set 结构加入成员
set.add(5);
console.log(set.size);//5
console.log(set.has(5));//true
console.log(set.delete(5));//true
console.log(set.size);//4
console.log(new Set('aabcdd'));//Set(4) { 'a', 'b', 'c', 'd' }
[...new Set("aaadfac")].join();//a,d,f,c
console.log([...new Set("aaadfac")]);//[ 'a', 'd', 'f', 'c' ]
// 拼接成字符串,去掉逗号
[...new Set("aaadfac")].join("");//'adfc'
console.log(['a', 'b', 'c', 'd'].join());//a,b,c,d
// 拼接成字符串
// Set 结构的实例有四个遍历方法，可以用于遍历成员。
//keys()：返回键名的遍历器
//values()：返回键值的遍历器
//entries()：返回键值对的遍历器
//forEach()：使用回调函数遍历每个成员
for (let item of set.keys()) {
  console.log(item);//1 2 3 4
}
for (let item of set.values()) {
  console.log(item);//1 2 3 4
}
for (let item of set.entries()) {
  console.log(item);//[ 1, 1 ] [ 2, 2 ] [ 3, 3 ] [ 4, 4 ]
}
set.forEach((value, key) => console.log(key + ' : ' + value));//1 : 1 2 : 2 3 : 3 4 : 4
//Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);//true
console.log([...set]);//[ 1, 2, 3, 4 ]
