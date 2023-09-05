onmessage = async (event) => {

  if (event.data.type === 'complexCalculation') {

    console.log("Message from main thread: " + event.data);

    const result = event.data.data.map((num) => num * num);
    setInterval(() => {
      // postMessage(result+"我是worker线程"+new Date());
      postMessage(
        {
          type: 'complexCalculation',
          data: result+"worker线程"+new Date().getTime()
        }
      );
    }, 3000);
  }

  if (event.data.type === 'readFile') {
    console.log('readFile:', event.data.file);
    const response = await fetch(event.data.file);
    const text = await response.text();
    self.postMessage(text);
  }

};
