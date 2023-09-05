Promise.reject=function(err) {
  return new MyPromise((_, reject) => {
    reject(err);
  });
}