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

/////////////////////////////////////////////////////
// * 解法一：回调方式实现
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === 'red') {
      red()
    } else if (light === 'green') {
      green()
    } else if (light === 'yellow') {
      yellow()
    }
    //灯亮完之后执行回调
    callback()
  }, timer)
}
//解决方案:通过递归让亮灯的一个周期无限循环
const step = () => {
  task(3000, 'red', () => {
    task(1000, 'green', () => {
      task(2000, 'yellow', step)
    })
  })
}
// step()


// * 解法二：Promise方案
const task2 = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      } else if (light === 'green') {
        green()
      } else if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })
}

const step2 = () => {
  task2(3000, 'red')
    .then(() => task2(1000, 'green'))
    .then(() => task2(2000, 'yellow'))
    .then(step2)
}

// step2()

// * 解法三：async/await方案
const task3 = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      light()
      resolve()
    }, timer)
  })
}
const taskRunner = async () => {
  await task3(3000, red)
  await task3(1000, green)
  await task3(2000, yellow)
  taskRunner()
}
// taskRunner()