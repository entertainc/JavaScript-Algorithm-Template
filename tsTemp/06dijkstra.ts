// 朴素版本dijkstra算法使用邻接矩阵存储图
// O(N^2)
const n: number = 100;  //节点数
const g: Array<Array<number>> = Array(n).fill(Array(n).fill(0));

const dijkstra: () => number = (): number => {
  const dis: Array<number> = Array(n + 1).fill(Infinity);
  const st: Array<boolean> = Array(n + 1).fill(false);
  dis[1] = 0;

  for (let i = 1; i < n; i ++) {
    let t = -1;

    for (let j = 1; j <= n; j ++) {
      if (!st[j] && (t == -1 || dis[t] > dis[j])) {
        t = j;
      }
    }

    st[t] = true;

    for (let j = 1; j <= n; j ++) {
      dis[j] = Math.min(dis[j], dis[t] + g[t][j]);
    }
  }

  return dis[n];
}