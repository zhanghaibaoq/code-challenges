/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const temp = [];
    if (lists.length === 0) return null;
    for (let i = 0; i < lists.length; i++) {
        // const l = lists[i];
        // let p = l;
        // while (p) {
        //     temp.push(p.val);
        //     p = p.next;
        // }
        while (lists[i]) {
            temp.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    if (temp.length === 0) return null; // 校验全为空数组边界条件
    temp.sort((a, b) => a - b);
    const head = new ListNode(temp[0]);
    let res = head;
    for (let i = 1; i < temp.length; i++) {
        // res = res.next = new ListNode(temp[i]);
        res.next = new ListNode(temp[i]);
        res = res.next;
    }
    return head;
};