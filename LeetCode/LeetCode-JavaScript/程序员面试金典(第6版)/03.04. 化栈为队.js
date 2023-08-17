class MyQueue {
    constructor() {
        this.A = [];
        this.B = [];
    }
    push (x) {
        this.A.push(x);
    }
    pop () {
        // 元素都在 A 中
        while (this.A.length) this.B.push(this.A.pop());// 将A中的元素全部倒入B中
        const res = this.B.pop();// 取出B中的最后一个元素
        while (this.B.length) this.A.push(this.B.pop());// 将B中的元素全部倒入A中, 保证A中的元素顺序不变
        return res;
    }
    peek () {
        return this.A[0];
    }
    empty () {
        return !this.A.length;
    }
}


// 使用两个栈实现队列，栈是先进后出，队列是先进先出，所以需要两个栈，一个栈用来入队，一个栈用来出队，当出队栈为空时，将入队栈的元素全部出栈并入栈到出队栈中，这样出队栈的元素就是先进先出的顺序了
class Queue1 {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    push (item) {
        this.stack1.push(item);
    }
    pop () {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());// 将stack1中的元素依次出栈，入栈到stack2中,此时stack2中的元素顺序和队列的顺序相反
            }
        }
        return this.stack2.pop();
    }
    peek () {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    empty () {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}
const queue = new Queue1();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
queue.push(4);
console.log(queue.pop()); // 3
console.log(queue.pop()); // 4