var mergeTwoLists = function (list1, list2) {
    const res = new ListNode()
    let [head, p1, p2] = [res, list1, list2]
    while (p1 && p2) {
        if (p1.val < p2.val) {
            head.next = new ListNode(p1.val)
            p1 = p1.next
        } else {
            head.next = new ListNode(p2.val)
            p2 = p2.next
        }
        head = head.next
    }
    head.next = p1 || p2 //p1 ? p1 : p2;
    return res.next
}

// 递归
/* 

这道题可以使用递归实现，新链表也不需要构造新节点，我们下面列举递归三个要素
终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
返回值：每一层调用都返回排序好的链表头
本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理
O(m+n)O(m+n)，mm 为 l1的长度，nn 为 l2 的长度

如果 l1 或者 l2 一开始就是空链表 ，那么没有任何操作需要合并，所以我们只需要返回非空链表。
否则，我们要判断 l1 和 l2 哪一个链表的头节点的值更小，然后递归地决定下一个添加到结果里的节点。
如果两个链表有一个为空，递归结束。
*/
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
var mergeTwoLists1 = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists1(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists1(l1, l2.next)
        return l2
    }
}
// 测试
const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

// console.log(mergeTwoLists1(l1, l2));

for (let p = mergeTwoLists1(l1, l2); p; p = p.next) {
    console.log(p.val)// 1 1 2 3 4 4
}
