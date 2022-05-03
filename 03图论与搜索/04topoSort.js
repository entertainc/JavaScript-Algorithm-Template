// 拓扑排序 针对有向无环图

// S1. 入度为0的点入队
/*
    while(queue) {
        t = queue.shift();

        while(t指向的边不为空) {
            删除边
            如果孩子的入度为0，则入队
        }
    }
*/

class Topo {
    constructor() {
        const N = 10010;
        const M = 2 * N;
        const h = Array(N).fill(-1);
        const e = Array(M).fill(0);
        const ne = Array(M).fill(0);
        const queue = [];
        const degree = Array(M).fill(0);
        let index = 0;
        let num = 0;

        add = function(a, b) {
            e[index] =  b;
            ne[index] = h[a];
            h[a] = index ++;
            degree[b] ++;
        }

        topoSort = function(n) { // n个结点 编号1-n
            for (let i = 1; i <= n; i ++) {
                if (!degree[i]) {
                    queue.push(i);
                    num ++;
                }
            }

            while(queue.length) {
                let top = queue.pop();

                for (let i = h[top]; i != -1; i = ne[i]) {
                    let j = e[i]; //add时e[i] = b 所以degree[e[i]] --;
                    degree[j] --;
                    if (degree[j] == 0) {
                        queue.push(j)
                        num ++;
                    }
                }
            }

            return num == n - 1;
        }
    }
}

