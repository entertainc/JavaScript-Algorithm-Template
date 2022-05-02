//  堆基本操作
//  1. 插入一个数
//  2. 求集合中最小值
//  3. 删除最小值
//  4. 删除任意一个元素
//  5. 修改任意一个元素

// 堆是一个完全二叉树
// 小根堆举例 父节点的值小于左右儿子的值
// x的左儿子是2x 右儿子是2x + 1，从1开始


class Heap {
    constructor() {
        const N = 100010;
        let size = 0;
        const heap = Array(N).fill(0);
    
        function up(index) { //只用和父节点比较
            while(Math.floor(index / 2) && this.heap[Math.floor(index / 2)] > this.heap[index]) {
                [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
                index = Math.floor(index / 2);
            }
        }

        function down(index) { // 和两个儿子节点比较 与最小的进行交换
            let t = index;
            if (index * 2 <= this.size && this.heap[index * 2] < this.heap[t]) t = u * 2;
            if (index * 2 + 1 <= this.size &&  this.heap[index * 2 + 1] < this.heap[t]) t = u * 2 + 1;

            if (index != t) {
                [this.heap[index], this.heap[t]] = [this.heap[t], this.heap[index]];
                down(t);
            }
        }

        function init(n) {
            for (let i = n / 2; i; i --) down(i);
        }
    }

    insert(x) {
        this.heap[++ this.size] = x;
        this.up(size);
    }

    minVal() {
        return this.heap[1];
    }

    removeMin() {
        this.heap[1] = this.heap[size --];
        this.down(1);
    }

    remove(k) {
        this.heap[k] = this.heap[size --];
        down(k);
        up(k);
    }

    change(k, x) {
        this.heap[k] = x;
        up(k);
        down(k);
    } 
}