// 快慢指针法，一开始快慢指针都处于链表起点。之后快指针先出发，走k步后，快慢指针再一起走，当快指针走到末尾时，此时的慢指针即为倒数第K个元素
const kthToLast = (head, k) => {
    let [fast, slow] = [head, head];
    while (k--) {
        // 快指针先走k步
        fast = fast.next;
    }
    while (fast) {
        // 再一起走，直到快指针走到头
        fast = fast.next;
        slow = slow.next;
    }
    // 此时的慢指针指的就是倒数第k个
    return slow.val;
};

//  me
var kthToLast1 = function (head, k) {
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    // len-k
    let index = 0;
    cur = head;
    while (cur) {
        if (index++ === len - k)
            return cur.val;
        cur = cur.next;
    }
    return -1;
};