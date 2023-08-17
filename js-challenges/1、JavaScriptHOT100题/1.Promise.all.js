Promise._all = function (promises) {
  let index = 0;
  let result = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
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

// test
function sleep (timer, content, isReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isReject ? reject(content) : resolve(content);
    }, timer);
  });
}

sleep(1000, "请求1").then(res => {
  console.log(res);
});

const p1 = sleep(1000, "请求1");
const p2 = sleep(3000, "请求2");
const p3 = sleep(2000, "请求3");
const p4 = sleep(500, "请求4");
const p5 = sleep(1000, "error", true);

Promise._all([p1, p2, p3, p4, p5])
.then(res => {
  console.log('test', res);
})
.catch(err => {
  console.log('test', err);
});

// const test = async () => {
//   const res = await Promise._all([p1, p2, p3, p4, p5]);
//   console.log('test1', res);

//   const [res1, res2, res3, res4, res5] = await Promise._all([p1, p2, p3, p4, p5]);
//   console.log('test2', res1, res2, res3, res4, res5);
// };
// test(); 