// 使用两个栈实现队列，栈是先进后出，队列是先进先出，所以需要两个栈，一个栈用来入队，一个栈用来出队，当出队栈为空时，将入队栈的元素全部出栈并入栈到出队栈中，这样出队栈的元素就是先进先出的顺序了
class Queue1 {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push (item) {
    this.stack1.push(item);
  }
  pop () {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());// 将stack1中的元素依次出栈，入栈到stack2中,此时stack2中的元素顺序和队列的顺序相反
      }
    }
    return this.stack2.pop();
  }
}
//  1 2 3 4 5 6 7 8 9 10
const queue = new Queue1();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
queue.push(4);
console.log(queue.pop()); // 3
console.log(queue.pop()); // 4.。

/////////////////////////////////////////
// 使用数组实现队列
class Queue {
  constructor() {
    this.items = [];
  }
  // 1.向队列尾部添加一个（或多个）新的项
  enqueue (item) {
    this.items.push(item);
  }
  // 2.移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue () {
    return this.items.shift();//性能不好,内部每次都要网前移动数组,可以使用链表
  }
  // 3.返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
  front () {
    return this.items[0];
  }
  // 4.如果队列中不包含任何元素，返回true，否则返回false
  isEmpty () {
    return this.items.length === 0;
  }
  // 5.返回队列包含的元素个数，与数组的length属性类似
  size () {
    return this.items.length;
  }
  // 6.toString方法
  toString () {
    return this.items.toString();
  }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.toString()); // 1,2,3
console.log(q.dequeue()); // 1


/////////////////////////////////////////
// 击鼓传花：几个好朋友一起玩游戏，围成一圈，任选一个人作为开头，开始数数，数到某个数字的人自动淘汰，不断重复直到只剩下一人获得胜利，问最后剩下的是原来在哪一个位置的人
// 先把所有参与的人按顺序加入到队列中，之后从头开始计数，没有数到相应数字的人从前端出队后再从后端入队，数到相应数字的人出队不再入队，不断重复这个流程直到只剩下一人，找出该人在原来队列中索引即可。
const passGame = (nameList, num) => {
  const queue = new Queue();
  for (const name of nameList) {
    queue.enqueue(name);
  }
  // for (let i = 0; i < nameList.length; i++) {
  //   queue.enqueue(nameList[i]);
  // }
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return nameList.indexOf(queue.front());
};
const nameList = ["lily", "lucy", "tom", "tony", "jack"];
console.log(passGame(nameList, 4)); // 0


/////////////////////////////////////////
// 优先队列：优先队列中的每个元素都有各自的优先级，优先级最高的元素最先被移除，优先级最低的元素最后被移除
function PriorityQueue () {
  // 创建一个类来表示队列元素，包含元素本身和优先级
  function QueueElement (element, priority) {
    this.element = element;
    this.priority = priority;
  }
  this.items = [];
  // 插入，先比较优先级，如果优先级更高，就插入到队列的前面，否则就插入到队列的后面
  PriorityQueue.prototype.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);
    if (this.items.length === 0) {
      this.items.push(queueElement);
    }
    else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  };
  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };
  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };
  // 如果队列中不包含任何元素，返回true，否则返回false
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // 返回队列包含的元素个数，与数组的length属性类似
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  };
  // toString方法
  PriorityQueue.prototype.toString = function () {
    let resultString = '';
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i].element + '-' + this.items[i].priority + ' ';
    }
    return resultString;
  };
}
const priorityQueue = new PriorityQueue();
// 入队 enqueue() 测试
priorityQueue.enqueue('A', 10);
priorityQueue.enqueue('B', 15);
priorityQueue.enqueue('C', 11);
priorityQueue.enqueue('D', 20);
priorityQueue.enqueue('E', 18);
console.log(priorityQueue.toString());//A-10 C-11 B-15 E-18 D-20
// 出队 dequeue() 测试
priorityQueue.dequeue();
console.log(priorityQueue.toString());//C-11 B-15 E-18 D-20
// 查看队首元素 front() 测试
console.log(priorityQueue.front());//C-11
// 查看队列是否为空 isEmpty() 测试
console.log(priorityQueue.isEmpty());//false


/////////////////////////////////////////
// 循环队列：循环队列是一种特殊的队列，它的特点是队尾和队首相连，形成一个环
// 继承队列类
// 优先队列内部的元素类
// 注意js是不能直接在class中声明class的，得单独声明两个类
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// 优先队列类（继承 Queue 类）
class PriorityQueue1 extends Queue {

  constructor() {
    super();
  }

  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  // 重写 enqueue()
  enqueue (element, priority) {
    // 根据传入的元素，创建 QueueElement 对象
    const queueElement = new QueueElement(element, priority);

    // 判断队列是否为空
    if (this.isEmpty()) {
      // 如果为空，不用判断优先级，直接添加
      this.items.push(queueElement);
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false;

      for (let i = 0; i < this.items.length; i++) {
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < this.items[i].priority) {
          // 在指定的位置插入元素
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  // 其余父类中的方法直接使用即可

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString () {
    let result = '';
    for (let item of this.items) {
      result += item.element + '-' + item.priority + ' ';
    }
    return result;
  }
}
const priorityQueue1 = new PriorityQueue();

// 入队 enqueue() 测试
priorityQueue1.enqueue('A', 10);
priorityQueue1.enqueue('C', 11);
priorityQueue1.enqueue('D', 20);
priorityQueue1.enqueue('B', 15);
priorityQueue1.enqueue('E', 18);
console.log(priorityQueue1.toString());
//--> output:
// A-10 C-11 B-15 E-18 D-20


// 出队 dequeue() 测试
priorityQueue1.dequeue();
priorityQueue1.dequeue();
console.log(priorityQueue1.toString());
//--> output:
// B-15 E-18 D-20

// isEmpty() 测试
console.log(priorityQueue1.isEmpty()); //--> false

// size() 测试
console.log(priorityQueue1.size()); //--> 3

// toString() 测试
console.log(priorityQueue1.toString()); //--> B-15 E-18 D-20