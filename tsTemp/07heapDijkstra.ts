// 堆优化版本dijkstra算法，在找最小距离时使用堆进行优化
// 使用邻接表存图
type heapProp = { // 节点编号和对应的距离
  nodeId: number;
  distance: number;
}
const n: number = 100;
const h: Array<number> = Array(n).fill(-1);
const e: Array<number> = Array(n).fill(0);
const ne: Array<number> = Array(n).fill(0);
const w: Array<number> = Array(n).fill(0);
const heap: Array<heapProp> = [];

const dijkstra: () => number = (): number => {
  const dis: Array<number> = Array(n + 1).fill(Infinity);
  const st: Array<boolean> = Array(n + 1).fill(false);
  dis[1] = 0;
  heap.push({nodeId: 1, distance: 0});

  for (let i = 1; i < n; i ++) {
    const { nodeId, distance }: heapProp = heap.shift() || ({nodeId: 0, distance: 0});
    
    if (st[nodeId])
      continue ;
    
    st[nodeId] = true;
    
    for (let j = h[nodeId]; j != -1; j = ne[j]) {
      const k: number = e[j];
      if (dis[k] > distance + w[j]) {
        dis[k] = Math.min(dis[k], distance + w[j]);
        heap.push({ nodeId: k, distance: dis[k] });

      }
    }
  }

  return dis[n];
};