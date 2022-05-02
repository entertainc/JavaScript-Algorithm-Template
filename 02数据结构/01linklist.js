// 数组模拟链表速度比较快

// 1. 数组模拟单链表
//    用的最多的是邻接表 (n个单链表) (主要存储树和图)
class SingleLinklist{
    constructor() {
        let N = 1000010;
        let head; //head -> next;
        let e = Array(N); //存储val;
        let ne = Array(N); // 存储next  next = -1 表示Next = null;
        let index; // 存储当前已经用到了哪个点 


        function init() {
            head = -1;
            index = 0;
        }

        function addToHead(val) { //头插
            ne[index] = head;
            e[index] = val;
            head = index;
            index ++;
        }

        function insert(val, k) {  // 将val插入到下标为k的点后面
            e[index] = val;
            ne[index] = ne[k];
            ne[k] = index;
            index ++;
        }

        function del(k) { //删除k后面的节点
            ne[k] = ne[ne[k]];
        }
    }
}

// 2. 数组模拟双链表 (优化题)

class DoubleList {
    constructor() {
        let N = 1000010;
        let l = Array(N); // 左指针
        let r = Array(N); // 右指针
        let e = Array(N);
        let index;

        function init() {
            // 0表示左端点, 1表示右端点
            r[0] = 1;
            l[1] = 0;
            index = 2;
        }

        function insertRight(val, k) { // 插到第k点的右边
            e[idx] = val;
            r[idx] = r[k];
            l[idx] = k;
            l[r[k]] = idx;
            r[k] = idx;
            idx ++;
        }

        function remove(k) { //删除第k个点
            l[r[k]] = l[k];
            r[l[k]] = r[k];
        }
    }
}