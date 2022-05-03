// 一般用于稀疏图，邻接表存储

class Heap {
    // 小根堆
    constructor() {
        const Len = 100010;
        let h = Array(Len).fill(2e9 + 1);
        let size = 0;

        function up(k) {
            while (h[k] < h[Math.floor(k / 2)] && Math.floor(k / 2)) {
                    [h[k], h[Math.floor(k / 2)]] = [h[Math.floor(k / 2)], h [k]];
                    k = Math.floor(k / 2);
            }
        }
     

        function down(k) {
            let t = k;
            if (2 * k <= size && h[2 * k] < h[t]) t = 2 * k;
            if (2 * k + 1 <= size && h[2 * k + 1] < h [t]) t = 2 * k + 1;

            if (t != k) {
                [h[k], h[t]] = [h[t], h[k]]
                down(t);
            }
        }

        function push(x) {
            h[++ index] = x;
            up(x);
        }
        
        function top() {
            return h[1];
        }

        function pop() {
            h[1] = h[size --];
            down(1);
        }
    }
}

function dijkstra(n, heap = new Heap()) {
    // 用邻接表存图
    const N = 100010;
    const st = Array(N).fill(false);
    const dist = Array(n).fill(Infinity);
    dist[1] = 0;

    heap.push([0, 1]) //[dis, num] [距离, 节点号]

    while (heap.size) {
        let t = heap.top();
        heap.pop();

        let num = t[1], dis = t[0];

        if (st[num]) continue;
            st[num] = true;

        for (let i = h[num]; i != -1; i = ne[i]) {
            let j = e[i];

            if (dist[j] > dis + w[i]) {
                dist[j] = dis + w[i];
                heap.push([dist[j], j]);
            }
        }
    }

    return dist[n] == Infinity? -1 : dist[n];
}