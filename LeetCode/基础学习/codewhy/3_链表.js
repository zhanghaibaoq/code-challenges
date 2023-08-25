// https://www.bilibili.com/video/BV1x7411L7Q7?p=24&vd_source=eac7ee3e188e81d32edf392ab1aa352c
class Node { // 节点类
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList { //链表类
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 尾部添加节点
  append (val) {
    let node = new Node(val);
    // 如果链表为空
    if (this.head === null) { //或者this.length === 0 
      this.head = node;//将head指向新节点
    } else {
      let current = this.head; //因为head指向的是第一个节点，所以current指向的也是第一个节点
      // 当current.next!=null时表示不是尾节点
      while (current.next) {//找到最后一个节点,将其next指向新节点
        current = current.next;//current指向下一个节点
      }
      current.next = node;
    }
    this.length++;
  }

  /**
   * @description: 在任意位置插入节点
   * @param {*} position 新插入节点的位置,position = 0 表示新插入后是第一个节点
   * @param {*} val
   */
  insert (position, val) {
    if (position < 0 || position > this.length) return false;
    let node = new Node(val);
    if (position === 0) {//在第一个位置插入
      node.next = this.head;// node指向原来的第一个节点
      this.head = node;//head指向新的第一个节点
    } else {
      // 0 < position <= length 的情况
      let index = 0;
      let current = this.head;//current指向第一个节点
      let previous = null;//previous指向当前节点的前一个节点
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  // 获取某个位置的元素 get(0);//1
  get (position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;

    // for (let i = 0; i < position; i++) {
    //   current = current.next;
    // }

    let index = 0;
    while (index++ < position) { //while循环性能更好
      current = current.next;
    }
    return current.val;
  }

  // 获取某个元素的位置
  indexOf (val) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.val === val) {
        return index;
      }
      index++;
      current = current.next;//current指向下一个节点,最后current为null，因为最后一个节点的next为null
      // console.log(current);
    }
    return -1;
  }

  // 获取某元素的所有位置
  indexOfAll (val) {
    let current = this.head;
    let index = 0;
    let arr = [];
    while (current) {
      if (current.val === val) {
        arr.push(index);
      }
      index++;
      current = current.next;
    }
    return arr;
  }

  // 修改某个位置的元素
  update (position, val) {
    if (position < 0 || position > this.length - 1) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.val = val;
    return true;
  }

  // 在任意位置删除节点
  removeAt (position) {
    if (position < 0 || position > this.length - 1) return null;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;//previous指向当前节点的前一个节点
        current = current.next;//current指向下一个节点
      }
      previous.next = current.next;//将previous指向current的下一个节点
    }
    this.length--;
    return current.val;
  }

  // 删除某个元素
  remove (val) {

    // let index = this.indexOf(val);
    // return this.removeAt(index);

    let current = this.head;
    let previous = null;
    while (current) {
      if (current.val === val) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return current.val;
      }
      previous = current;
      current = current.next;
    }
  }

  print () {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.val + " ";
      current = current.next;
    }
    return str;
  }

  isEmpty () {
    return this.length === 0;
  }

  size () {
    return this.length;
  }

}
let list = new LinkedList();
list.append(1);
console.log(removeNthFromEnd(list.head, 1));
// console.dir(list, {
//   depth: 100
// });
// console.log(list.get(0));//1
// console.log(list.get(2));//3
// console.log(list.get(4));//5
// console.log(list.get(5));//null
// console.log(list.print());//1 2 3 4 5
// console.log(list.removeAt(0));//1
// console.log(list.print());//1 2 3 4 5


// console.log('indexOf2:', list.indexOf(11));//1
// console.log(list.indexOf(3));//2
// list.update(2, 6);

// list.insert(0, 'a');
// list.insert(3, 'b');
// list.insert(5, 'c');
// list.insert(19, 'd');
// console.log(list.print());//a 1 2 b 3 c 4 5


//////////////////////////////////////////
// https://dragon-liu.github.io/javascript-datastructures-algorithms/md/7.%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.html#%E4%BB%A3%E7%A0%81%E6%B5%8B%E8%AF%95
// 双向链表结构的封装

// 双向链表的节点类（继承单向链表的节点类）
class DoublyNode extends Node {
  constructor(element) {
    super(element); // 调用父类的构造函数,继承父类的属性,并传入参数,初始化父类的属性, 
    this.prev = null;
  }
}

// 双向链表类（继承单向链表类）
class DoublyLinkedList extends LinkedList {

  constructor() {
    super();
    this.tail = null;
  }

  // ------------ 链表的常见操作 ------------ //

  // append(element) 往双向链表尾部追加一个新的元素
  // 重写 append()
  append (data) {

    // 1、创建新节点
    const newNode = new DoublyNode(data);

    // 2、追加新节点
    if (this.length === 0) {
      // 链表长度为 0 时，直接修改头尾指针即可
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ！！跟单向链表不同,不用通过循环找到最后一个节点,因为有尾指针
      // 当添加一个节点时，涉及3个指针要修改
      // 1、原来的尾节点的next指针要指向新节点
      // 2、新节点的prev指针要指向原来的尾节点
      // 3、尾指针要指向新节点
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    // 3、追加完新节点后，链表长度 + 1
    this.length++;
  }

  // insert(position, data) 插入元素
  // 重写 insert()
  insert (position, data) {

    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false;

    // 2、创建新的双向链表节点
    const newNode = new DoublyNode(data);

    // 3、插入节点，有3钟情况要考虑

    // 3.1 在第 0 个位置插入
    if (position === 0) {
      if (this.length === 0) {

        // 链表长度不为 0 时，直接修改头尾指针即可
        this.head = newNode;
        this.tail = newNode;
      } else {

        // 链表长度为 0 时，涉及3个指针要修改，要注意修改次序
        // 1、新节点的next指针要指向原来的头节点
        // 2、原来的头节点的prev指针要指向新节点
        // 3、头指针要指向新节点
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

      }
    } else if (position === this.length) {

      // 3.2 在最后一个位置插入,涉及3个指针要修改，要注意修改次序
      // 1、新节点的prev指针要指向原来的尾节点
      // 2、原来的尾节点的next指针要指向新节点
      // 3、尾指针要指向新节点
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;

    } else {
      // 3.3 在中间位置插入，对应 0 < position < length 的情况

      // 初始化一些状态变量
      // 与单向链表不同的是，不需要previous变量保存上一个节点的指针了
      let index = 0;           // 遍历索引初始化为 0
      let current = this.head; // 遍历的当前节点初始化为 head

      // 在 0 ~ position 之间遍历，不断地更新 current
      // 直到找到要插入的位置
      while (index++ < position) {
        current = current.next;
      }

      // 在当前节点之前插入新节点，涉及4个指针要修改，要注意修改次序
      // 1、新节点的prev指针要指向当前节点的prev
      // 2、新节点的next指针要指向当前节点
      // 3、当前节点的prev的next指针要指向新节点
      // 4、当前节点的prev指针要指向新节点
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    // 4、追加完新节点后，链表长度 + 1
    this.length++;
    // 5、返回新添加的节点，方便其他操作
    return newNode;
  }

  // getData(position) 获取指定位置的 data
  // 重写 getData()
  getData (position) {
    // 1、position越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、判断要获取的节点离头尾节点哪个比较近

    // 离头节点比较近
    if (this.length / 2 >= position) {

      // 获取指定 position 的节点
      let index = 0;
      let current = this.head;
      while (index++ < position) {
        current = current.next;
      }
      // 3、返回相应节点的 data
      return current.data;
      // 离尾节点比较近
    } else {

      let index = this.length - 1;
      let current = this.tail;
      while (index-- > position) {
        current = current.prev;
      }
      // 3、返回相应节点的 data
      return current.data;
    }
  }

  // removeAt(position) 删除指定位置的节点，并返回删除的那个节点
  // 重写 removeAt()
  removeAt (position) {
    // 1、position越界判断
    if (position < 0 || position >= this.length) return null;

    // 2、删除指定 position 节点
    let current = this.head;

    // 删除第一个节点的情况
    if (position === 0) {
      // 链表内只有一个节点的情况
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else { // 链表内有多个节点的情况
        this.head.next.prev = null;
        this.head = this.head.next;
      }
    } else if (position === this.length - 1) { // 删除最后一个节点的情况
      current = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else { // 删除 0 ~ this.length - 1 里面节点的情况

      // 判断要删除的节点离头尾节点哪个比较近

      // 离头节点比较近
      if (this.length / 2 >= position) {

        // 获取指定 position 的节点
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }

        // 删除相应节点
        current.prev.next = current.next;
        current.next.prev = current.prev;

      } else { // 离尾节点比较近

        // 获取指定 position 的节点
        let index = this.length - 1;
        current = this.tail;
        while (index-- > position) {
          current = current.prev;
        }

        // 删除相应节点
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    // 3、更新链表长度 -1
    this.length--;
    // 4、返回被删除的节点，方便其他操作
    return current;
  }

  // forwardToString() 链表数据从前往后以字符串形式返回
  forwardToString () {
    let currentNode = this.head;
    let result = '';

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--';
      currentNode = currentNode.next;
    }

    return result;
  }

  // backwardString() 链表数据从后往前以字符串形式返回
  backwardString () {
    let currentNode = this.tail;
    let result = '';

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--';
      currentNode = currentNode.prev;
    }

    return result;
  }
}


const doublyLinkedList = new DoublyLinkedList();

/* // append() 测试
console.log('append() 测试');
doublyLinkedList.append('ZZ');
doublyLinkedList.append('XX');
doublyLinkedList.append('CC');
console.log(doublyLinkedList.toString()); //--> ZZ XX CC

// insert() 测试
console.log('insert() 测试');
doublyLinkedList.insert(0, '00');
doublyLinkedList.insert(2, '22');
console.log(doublyLinkedList.toString()); //--> 00 ZZ 22 XX CC

// getData() 测试
console.log('getData() 测试');
console.log(doublyLinkedList.getData(1)); //--> ZZ

// indexOf() 测试
console.log('indexOf() 测试');
console.log(doublyLinkedList.indexOf('XX')); //--> 3

// removeAt() 测试
console.log('removeAt() 测试');
doublyLinkedList.removeAt(0);
doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.toString()); //--> ZZ XX CC

// update() 测试
console.log('update() 测试');
doublyLinkedList.update(0, '111111');
console.log(doublyLinkedList.toString()); //--> 111111 XX CC

// remove() 测试
console.log('remove() 测试');
console.log(doublyLinkedList.remove('111111'));
// console.log(doublyLinkedList.remove('XX'));
console.log(doublyLinkedList.toString()); //--> XX CC

// forwardToString() 测试
console.log('forwardToString() 测试');
console.log(doublyLinkedList.forwardToString()); //--> XX--CC--

// backwardString() 测试
console.log('backwardString() 测试');
console.log(doublyLinkedList.backwardString()); //--> CC--XX-- */