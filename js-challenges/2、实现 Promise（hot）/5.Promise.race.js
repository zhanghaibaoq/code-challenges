Promise._race = function(arr){
  return new Promise((resolve,reject) => {
    for(let item of arr){
      Promise.resolve(item).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    }
  })
}

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

Promise._race([request1, request2, request3, request4, request5]).then(
  (res) => {
    console.log("_race:", res);
  },
  (err) => {
    console.log("_race:", err);
  }
);