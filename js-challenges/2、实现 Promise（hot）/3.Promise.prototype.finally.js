Promise.prototype._finally = function (cb) {
  return this.then(
    (res) => {
      cb(); // 实现了收不到参数了
      return data;
    },
    (err) => {
      cb();
      throw err;
    }
  );
  // finally函数 返回结果应该是无效的
};

// 无论什么结果，都会运行
const pro = new Promise((resolve, reject) => {
  resolve(1);
});
const pro2 = pro._finally((d) => {
  console.log("finally", d); // 收不到d参数
  // 本身不改变状态，但是抛出一个错误，数据就会变成它的错误
  // throw 123;
  return 123; //不起作用
});
setTimeout(() => {
  console.log(pro2);
});
