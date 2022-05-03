// 所有边权都是正数 N个点M个边 一般用稠密图 邻接矩阵存图
// 朴素版 O(N ** 2)
// 堆优化版 O(M * log N)

/*
    s[]存储已经确定最短距离的点
    dist[] 存储距离
    S1. 初始化距离 dist[1] = 0, dist[i] = Infinity (1是起点，1到1的距离是0)
    S2. for (let i = 1; i <= n; i ++)
            t不存在s中 并且t是当前求得的距离原点距离最短的点
                eg: w[1][2] = 4, w[1][3] = 10, w[2][3] = 2;
                    则第一次将1加入S并且更新2 3两个点
                    第二次将2加入s因为 dist[2] < dist[3];
            s.push(t);
            利用t更新其他点的距离
*/  

const N = 100010;
const dist = Array(N);
const s = Array(N).fill(0);

function dijkstra(n) {
    const w = Array(n).fill(0).map(item => Array(n).fill(1)); //存权重
    dist[1] = 0;
    for (let i = 2; i <= n; i ++) {
        dist[i] = Infinity;
    }

    for (let i = 0; i < n; i ++) {
        let t = -1;

        for (let j = 1; j <= n; j ++) {
            if (!s[j] && (t == -1 || dist[t] > dist[j]))
                t = j;
        }

        s[t] = true;

        for (let j = 1; j <= n; j ++) {
            dist[j] = Math.min(dist[j], dist[t] + w[t][j])
        }
    }

    return dist[n] == Infinity? -1 : dist[n];
}