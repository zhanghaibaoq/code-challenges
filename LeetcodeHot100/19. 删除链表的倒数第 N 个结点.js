// 快慢指针
var removeNthFromEnd1 = function (head, n) {
    let [fast, slow] = [head, head];
    while (n--) {
        // 快指针先走n步，此时快指针和慢指针之间相差n个节点，当快指针走到最后一个节点时，慢指针就是倒数第n个节点的前一个节点
        fast = fast.next;
    }
    if (!fast) {// 删除的是第一个节点,此时fast为null，slow为head
        return head.next;// 删除的是第一个节点
    }
    while (fast.next) {// 快指针走到最后一个节点
        fast = fast.next;
        slow = slow.next;
    }
    // 删除slow的下一个节点，如删除的是倒数第二个节点，则slow现在是倒数第三个节点
    slow.next = slow.next.next; // 跳过被删除的节点
    return head;
};

// 记录链表长度
let removeNthFromEnd2 = function (head, n) {
    // 记录链表的长度
    let p = head;
    let length = 0;
    while (p) {
        length++;
        p = p.next;
    }
    // 计算要移位的数量
    let count = length - n - 1;
    if (count === -1) return head.next; // 删除的是第一个节点      if (count < 0) return head.next;
    p = head;
    // 指针后移，数量用完后，则表示到达了要删除的节点的上一个节点
    while (count--) {
        p = p.next;
    }
    // 删除节点
    p.next = p.next.next;
    return head;
};


const removeNthFromEnd = (head, n) => {
    // 定义虚拟节点
    const dummy = new ListNode(-1, head);
    // 定义左右指针，都指向虚拟节点
    let left = dummy,
        right = dummy;
    // 右指针先走n+1步
    while (1 + n--) {
        right = right.next;
    }
    // 如果此时右指针到null了，说明删除的是第一个节点
    // 直接返回dummy.next.next;
    if (!right) return dummy.next.next;
    // 右指针没到头
    while (right) {
        // 左右指针一起走
        right = right.next;
        left = left.next;
    }
    // 右指针走到null之后，删除左指针的下一个节点即可
    left.next = left.next.next;
    // 返回虚拟节点的next
    return dummy.next;
};

// 笨方法
var removeNthFromEnd3 = function (head, n) {
    let arr = [];
    let temp = head
    while (temp) {
        arr.push(temp.val)
        temp = temp.next
    }
    arr.splice(arr.length - n , 1)
    let resList = new ListNode();
    let h=resList;
    for (let node of arr) {
        h.next = new ListNode(node);
        h = h.next;
    }
    return resList.next;
}