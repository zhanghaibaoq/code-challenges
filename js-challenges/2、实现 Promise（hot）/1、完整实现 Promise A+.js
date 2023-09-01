// https://www.douyin.com/video/7231842461197356345
// https://juejin.cn/post/7043758954496655397#heading-7
// Promise A+ 规范, 只有一个 then 方法，没有 catch、finally 等方法
// ES6 规范，有 then、catch、finally 等方法

const PENDING = "pending";
const FUlFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handlers = [];// 存放 then 中的回调函数
  constructor(func) {
    const resolve = (data) => {
      this.#changeState(FUlFILLED, data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };
    try {
      func(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  #changeState (state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  }

  #isPromise (value) {
    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
      return typeof value.then === 'function';
    }
    return false;
  }

  #runMicroTask (func) {
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(func);
    } else if (typeof MutationObserver === 'function') {
      const observer = new MutationObserver(func);
      const textNode = document.createTextNode('1');
      observer.observe(textNode, {
        characterData: true
      });
      textNode.data = '2';
    } else {
      setTimeout(func, 0);
    }
  }

  #runOne (callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== 'function') {
        if (this.#state === FUlFILLED) {
          resolve(this.#result);
        } else {
          reject(this.#result);
        }
        return;
      }
      try {
        const res = callback(this.#result);
        if (this.#isPromise(res)) {
          res.then(resolve, reject);
        } else {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  #run () {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } = this.#handlers.shift();
      if (this.#state === FUlFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        this.#runOne(onRejected, resolve, reject);
      }

    }
  }

  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject
      });
      this.#run();
    });
  }


  catch (onRejected) {
    return this.then(null, onRejected);
  }

  finally (onFinally) {
    return this.then((res) => {
      onFinally();
      return res;
    }
      , (err) => {
        onFinally();
        throw err;
      });
  }

  static resolve (value) {
    if (value instanceof MyPromise) return value;
    let _resolve, _reject;
    const p = new MyPromise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    if (p.#isPromise(value)) {
      value.then(_resolve, _reject);
    } else {
      _resolve(value);
    }
    return p;
  }

  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}


// test

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
p.then((res) => {
  console.log('ok1', res);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res * 2);
    }, 1000);
  });
}).then((res) => {
  console.log('ok2', res);
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(res * 2);
    }, 1000);
  });
}).then((res) => {
  console.log('ok3', res);
});

/* function delay (time) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

delay(1000).then((res) => {
  console.log('delay', res);
});

async function test () {
  const res = await delay(1000);
  console.log('test', res);
}
test(); */

/* new MyPromise((resolve, reject) => {
  reject(1);
}).catch((err) => {
  console.log('err', err);
}).finally(() => {
  console.log('finally');
}); */

/* const p1 = new MyPromise((resolve, reject) => {
  resolve(1);
});
// console.log(MyPromise.resolve(p1) === p1);// true
MyPromise.resolve(p1).then((res) => {
  console.log('res', res);// res 1
})
 */
