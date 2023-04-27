// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
// const newArr = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// const newArr2 = Array.from(new Set(arr));
// const newArr3 = [...new Set(arr)];
// const newArr4 = arr.reduce((prev, cur) => {
//   return prev.includes(cur) ? prev : [...prev, cur];
// }, []);
// console.log(newArr4);


// //定义链表节点类
// class ListNode {
//   constructor(val=0) {
//     this.val = val; //当前节点的值
//     this.next = null; //指向下一个节点的指针，默认为null
//   }
// }

// //构建链表
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
// let node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// //输出链表
// let current = node1; //从头节点开始遍历
// while (current != null) { //一直遍历到链表末尾
//   console.log(current.val);
//   current = current.next; //指向下一个节点
// }
