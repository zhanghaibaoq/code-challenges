/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let cache = new Set();
    while (head) {
        if (cache.has(head)) {
            return true;
        } else {
            cache.add(head);
        }
        head = head.next;
    }
    return false;
};


/* 快慢指针 */

var hasCycle1 = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast)
            return true;
    }
    return false;
};

var hasCycle2 = function (head) {
    if (head === null || head.next === null) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// 测试
function ListNode (val) {
    this.val = val;
    this.next = null;
}
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;
console.log(hasCycle(head));
