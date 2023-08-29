Promise._all = function (promises) {
  return new Promise((resolve, reject) => {
    // 该方法的参数需为一个可迭代对象
    if (promises == null || typeof promises[Symbol.iterator] !== "function") {
      throw new TypeError(`${promises} is not iterable`);
    }
    // 可迭代对象为空则返回已resolve的promise
    if (promises.length === 0) {
      resolve([]);
    }

    let index = 0;
    const result = [];
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
          // index++;
          result[i] = res;
          if (++index === promises.length) {
            resolve(result);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

//----------------test----------------------//
function sleep(timer, content, isReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isReject ? reject(content) : resolve(content);
    }, timer);
  });
}

// sleep(1000, "请求1").then(res => {
//   console.log(res);
// });

const p1 = sleep(1000, "请求1");
const p2 = sleep(3000, "请求2");
const p3 = sleep(2000, "请求3");
const p4 = sleep(500, "请求4");
const p5 = sleep(1000, "发生error了", true);

// Promise._all([p1, p2, p3, p4, p5])
//   .then(res => {
//     console.log('then_test:', res);
//   })
//   .catch(err => {
//     console.log('err_test', err);
//   });

(async () => {
  const res = await Promise._all([p1, p2, p3, p4, 5]);
  console.log('test1', res);

  const [res1, res2, res3, res4, res5] = await Promise._all([p1, p2, p3, p4, p5]);
  console.log('test2', res1, res2, res3, res4, res5);
})();

Promise._all([
  // MyPromise.reject(1),
  Promise.resolve(2),
  Promise.resolve(3),
  4,
]).then(
  (data) => {
    console.log("成功", data);
  },
  (reason) => {
    console.log("失败", reason);
  }
);
