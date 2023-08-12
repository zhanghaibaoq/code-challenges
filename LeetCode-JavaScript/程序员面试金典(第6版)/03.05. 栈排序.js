class SortedStack {
    constructor() {
        // A设计的栈
        this.A = [];
        // B辅助栈
        this.B = [];
    }
    push (val) {
        // 当A不为空，且A栈顶元素小于val时
        // 先将A栈顶放入B
        while (!this.isEmpty() && this.peek() < val) {
            this.B.push(this.A.pop());
        }
        // val放入A
        this.A.push(val);
        // 再将B的值放回来
        while (this.B.length) {
            this.A.push(this.B.pop());
        }
    }
    pop () {
        return this.A.pop();
    }
    peek () {
        return this.A[this.A.length - 1] || -1;
    }
    isEmpty () {
        return !this.A.length;
    }
}
/////////////////////////////////////////
class SortedStack {
    constructor() {
        this.stack = [];
    }
    push (val) {
        if (val < this.peek() || this.isEmpty()) {
            this.stack.push(val);
        } else {
            let min = this.stack.pop();
            this.push(val);//递归,直到val小于栈顶元素,或栈为空
            // console.log('this:', this);
            this.stack.push(min);

            /* 
            下面的代码虽然可以，但不符合本题的要求:
            this.stack.push(val);
            this.stack.sort((a,b)=>b-a)
            */
        }
    }
    pop () {
        return this.stack.pop();
    }
    peek () {
        return this.stack[this.stack.length - 1] ?? -1; //使用空值合并运算符，如果前者为空则取后者值
    }
    isEmpty () {
        return !this.stack.length;
        // return this.stack.length > 0 ? false : true;
    }
}
const sortedStack = new SortedStack();
sortedStack.push(11);
console.log(sortedStack);
sortedStack.push(2);
console.log(sortedStack);
sortedStack.push(23);
console.log(sortedStack);
sortedStack.push(422);
sortedStack.push(1);
sortedStack.push(3);
console.log(sortedStack);
console.log(sortedStack.pop());
console.log(sortedStack.pop());
sortedStack.push(4);
console.log(sortedStack);