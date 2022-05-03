// 稠密图用朴素版 O(N ** 2)
// 稀疏图用堆优化版 O(M log N)

// S1. 初始化距离
// S2. n次循环
// S3. 找到集合外距离最近的典t
// S4. 用t更新其他点到集合的距离

function Prim(n, g) { //n是节点数 g是邻接矩阵
    const N = 1e5;
    const dist = Array(N).fill(2e9);
    const st = Array(N).fill(false);
    let res = 0;

    for (let i = 0; i < n; i ++) {
        let t = -1;

        for (let j = 1; j <= n; j ++) {
            if (!st[j] && (t == -1 || dist[t] > dist[j]))
                t = j;
        }

        if (i && dist[t] == 2e9)  //说明图不连通 则不存在最小生成树
            return 2e9;

        if (i) //只要不是第一个点 就加入距离
            res += dist[t];


        for (let j = 1; i <= n; j ++) {
            if (g[t][j]) {
                dist[j] = Math.min(dist[j], g[t][j])
            }
        }

        st[t] = true;
    }
}