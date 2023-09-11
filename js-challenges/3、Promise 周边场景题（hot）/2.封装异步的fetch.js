// 封装异步的fetch，使用async await方式来使用
async function fetchAsync (url, options) {
  return new Promise((resolve, reject) => {
      fetch(url, options)
          .then(response => {
              if (response.status === 200) {
                  return response.json();
              } else {
                  reject('服务器出错了');
              }
          })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              reject(error);
          });

  })
}