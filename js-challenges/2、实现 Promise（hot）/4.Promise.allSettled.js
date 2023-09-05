Promise._allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        value => {
          res[i] = { status: 'fulfilled', value };
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        }
      ).catch(
        value => {
          res[i] = { status: 'rejected', value };
          count++;
          if (count === promises.length) {
            resolve(res);
          }
        }
      );
    }
  });
};

//--------------test----------------//
function sleep(timer, content, isReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isReject && reject(content);
      !isReject && resolve(content);
    }, timer);
  });
}

const request1 = sleep(1000, "请求1");
const request2 = sleep(3000, "请求2");
const request3 = sleep(2000, "请求3");
const request4 = sleep(500, "请求4");
const request5 = sleep(1000, "error", true);

Promise._allSettled([request1, request2, request3, request4, request5]).then((res) => {
  console.log(res);
});