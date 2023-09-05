// // Web Worker 脚本

// 监听主线程的消息
self.addEventListener('message', (event) => {
  const { command, n } = event.data;
  console.log('command:',command,'n:',n);

  if (command === 'calculateFibonacci') {
      const result = calculateFibonacci(n);
      self.postMessage(result); // 向主线程发送计算结果
  }
});

// 计算斐波那契数列的函数
function calculateFibonacci(n) {
  if (n <2) {
      return n;
  } else {
      return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }
}

// this.onmessage = function(e) {
//   const { command, n } = e.data;
//   const result = calculateFibonacci(n);
//   self.postMessage(result); // 向主线程发送计算结果
// }