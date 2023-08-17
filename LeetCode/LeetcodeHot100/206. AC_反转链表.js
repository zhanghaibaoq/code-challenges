// https://leetcode.cn/problems/reverse-linked-list/solutions/2136119/jian-dan-yi-dong-javac-pythonjsgo-dong-h-8hvk/?envType=featured-list&envId=2cktkvj
const reverseList = head => {
    // 定义cur指向头部
    // pre指向头部前面的null
    let [cur, pre] = [head, null];
    // 遍历链表
    while (cur) {
        // 定义next为cur下一个
        const next = cur.next;
        // cur的指向改为pre
        cur.next = pre;
        // pre改为当前cur的指向
        pre = cur;
        // cur的指向改为next的指向
        cur = next;
    }
    // 遍历结束，cur指向null，返回pre
    return pre;
};

// 简化版
var reverseList2 = function (head) {
    let pre = null;
    while (head) {
        const next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};

// 数组保存 
var reverseList3 = function (head) {
    let res = new ListNode();
    let p = res;// 保存头部
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    // arr.reverse();
    // for (const x of arr) {
    //     p.next = new ListNode(x);
    //     p = p.next;
    // }

    // while (arr.length) {
    //     p.next = new ListNode(arr.pop());
    //     p = p.next;
    // }

    for (let i = arr.length - 1; i >= 0; i--) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }

    return res.next;
};

var reverseList4 = function (head) {
    if (!head || !head.next) return head;
    const p = reverseList4(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

// 测试
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let head1 = reverseList(head);
while (head1) {
    console.log(head1.val);
    head1 = head1.next;
}