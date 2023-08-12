// 如果链表一样长且有交点，则第一次遍历就能找到交点，返回
// 如果不一样长且有交点，则第二次遍历就能找到交点，返回
// 如果没有交点，则第二次遍历结束都是null，遍历结束，返回null

//  结点相等意味着结点值和结点地址都得相等才行，找公共结点，两个链表中有些结点是共用的，也就是地址一样，让你找出共用的第一个结点

https://leetcode.cn/problems/intersection-of-two-linked-lists/solution/intersection-of-two-linked-lists-shuang-zhi-zhen-l/
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};

var getIntersectionNode1 = function (headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};