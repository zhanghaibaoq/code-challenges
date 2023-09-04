// 循环打印红灯3秒，绿灯1秒，黄灯2秒，不断交替重复亮灯
function light (name, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, timer);
  });
}

const lightList = [
  { name: 'red', timer: 3000 },
  { name: 'green', timer: 1000 },
  { name: 'yellow', timer: 2000 }
];

async function runLights () {
  // await light('red', 3000);
  // await light('green', 1000);
  // await light('yellow', 2000);
  for (let i = 0; i < lightList.length; i++) {
    const { name, timer } = lightList[i];
    await light(name, timer);
  }
  runLights();
}
runLights();