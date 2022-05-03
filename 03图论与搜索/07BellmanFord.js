// O(NM) 处理有负权边
// S1. for n次
// S2. for 所有边 a, b, w 表示 a->b有一个权重为w的边
// S3. dist[b] = min(dist[b], dist[a] + w); 松弛操作
function BellmanFord(edges, k, n) { //到第n个点的距离
    const N = 100010;
    const inf = 2e20 + 1;
    const dist = Array(N).fill(inf);
    dist[1] = 0;
    // k次循环表示从原点不超过k条边的最短路
    // 用edges = [...[a, b, w]] 存储边
    for (let i = 0; i < k; i ++) {
        let backup = [...dist];
        for (let j = 0, len = edges.length; j < len; j ++) {
            let [a, b, c] = edges[j];
            dist[b] = backup[a] + c;
        }
    }

    if (dist[n] >= inf / 2) //表示k条边之内没有到n点的最短路
        return -1;
    return dist[n]
}