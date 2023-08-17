/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/* 递归 */
var removeElements = function (head, val) {
  if (head === null) return head;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

/* 遍历 */
var removeElements2 = function (head, val) {
  // 哨兵=>1=>2=>3=>4
  // return 哨兵.next

  let ele = {
    next: head
  };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    }
    else {
      p = p.next;
    }
  }
  return ele.next;
};