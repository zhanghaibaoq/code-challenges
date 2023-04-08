function IsPopOrder (pushV, popV) {
  const temp = [];
  for (let i = 0; i < pushV.length; i++) {
    temp.push(pushV[i]);
    while (temp.length && temp[temp.length - 1] === popV[0]) {
      popV.shift();
      temp.pop();
    }
  }
  return temp.length === 0;
}

function IsPopOrder1 (pushV, popV) {
  if (pushV.length === 0 || popV.length === 0) return true;
  const temp = [];
  let index = 0;
  for (let i = 0; i < pushV.length; i++) {
    temp.push(pushV[i]);
    while (temp.length && temp[temp.length - 1] === popV[index]) {
      index++;
      temp.pop();
    }
  }
  return temp.length === 0;
}