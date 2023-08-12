const reverseList = head => {
    let [cur, pre] = [head, null];
    while (cur) {
        const next = cur.next;// 定义next为cur下一个
        cur.next = pre;// cur的指向改为pre
        pre = cur;
        cur = next;
    }
    return pre;
};
