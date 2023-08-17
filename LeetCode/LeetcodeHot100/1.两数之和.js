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
    let temp = target - nums[i];
    if (temp in obj) {
      return [i, obj[temp]];
    } else {
      obj[nums[i]] = i;
    }
  }
};

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
// map.clear();//清空map
// console.log(map.size);//0


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

for (let [key, value] of map) {
  console.log(key, value);//a 111 b 222
}

//set 用法
let arr1 = [1, 2, 3, 4, 4];
const set = new Set(arr1);//左侧代码也展示了一种去除数组重复成员的方法。
set.add(5);
console.log(set.size);//5
console.log(set.has(5));//true
console.log(set.delete(5));//true
console.log(set.size);//4
console.log(new Set('aabcdd'));//Set(4) { 'a', 'b', 'c', 'd' }
[...new Set("aaadfac")].join();//a,d,f,c
console.log([...new Set("aaadfac")]);//[ 'a', 'd', 'f', 'c' ]
[...new Set("aaadfac")].join("");//'adfc'
console.log(['a', 'b', 'c', 'd'].join());//a,b,c,d

for (let item of set.keys()) {
  console.log(item);//1 2 3 4
}
for (let item of set.values()) {
  console.log(item);//1 2 3 4
}
for (let item of set.entries()) {
  console.log(item);//[ 1, 1 ] [ 2, 2 ] [ 3, 3 ] [ 4, 4 ]
}
set.forEach((value, key) => console.log(key + ' : ' + value));//1 : 1   2 : 2   3 : 3   4 : 4