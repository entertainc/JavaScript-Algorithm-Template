// 邻接矩阵存储图
// 与dijkstra算法类似
const n: number = 100;  //节点数
const g: Array<Array<number>> = Array(n).fill(Array(n).fill(0));

const prim: () => number = (): number => {
  const dis: Array<number> = Array(n + 1).fill(Infinity);
  const st: Array<boolean> = Array(n + 1).fill(false);  
  let res: number = 0;
  dis[1] = 0;
  st[1] = true;

  for (let i = 0; i < n; i ++) {
    let t = -1;
    for (let j = 1; j <= n; j ++) {
      if (!st[j] && (t == -1 || dis[t] > dis[j])) {
        t = j;
      } 
    }

    if (i && dis[t] == Infinity)
      return -1;
    if (i)
      res += dis[t];

    st[t] = true;
    for (let j = 1; j <= n; j ++) {
      if (g[t][j])
        dis[j] = Math.min(dis[j], g[t][j]);
    }
  }

  return res;
}