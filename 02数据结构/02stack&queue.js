class Stack {
    constructor() {
        let N = 100010;
        let stk = Array(N);
        let index = 0;
    }

    push(val) {
        stk[++index] = val;
    }

    pop(val) {
        return stk[index --];
    }

    isEmpty() {
        return index == 0;
    }
}

class Queue {
    constructor() {
        let N = 100010;
        let q = Array(N);
        let head = 0; 
        let tail = 0;
    }

    push(val) {
        q[++ tail] = val;
    }

    pop() {
        return q[head ++];
    }

    isEmpty() {
        return (head < tt);
    }
}

// Application 单调栈
// 单调队列 滑动窗口