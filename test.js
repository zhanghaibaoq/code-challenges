const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
const newArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
const newArr2 = Array.from(new Set(arr));
const newArr3 = [...new Set(arr)];
const newArr4 = arr.reduce((prev, cur) => {
  return prev.includes(cur) ? prev : [...prev, cur];
}, []);
console.log(newArr4);
