const detectCycle = head => {
    if (!head) return null;
    // 定义快慢指针
    let slow = head;
    let fast = head;

    while (fast) {
        // 慢指针一次走一步
        slow = slow.next;
        if (fast.next) {
            // 快指针一次走两步
            fast = fast.next.next;
        } else {
            // 若fast走到头了，说明没有环
            return null;
        }
        // 快慢指针相遇，有环
        if (fast === slow) {
            // 重新定义一个指针，从头开始每次走一步
            // 会与slow在环入口处相遇
            let p = head;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};

/* 
一个非常直观的思路是：我们遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点，就可以判定链表中存在环。借助哈希表可以很方便地实现。
*/
var detectCycle1 = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
