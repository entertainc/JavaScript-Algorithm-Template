// 求从源点经过至多k条边到每个点的最短距离

function edge(u = 0, v = 0, w = 0, id) {
  this.u = u;
  this.v = v;
  this.w = w;
  this.id = id;
}
const len = 4;
const edges = Array(len).fill(0).map((num, idx) => new edge(0, 0, 0, idx));

const bellmanFord = k => { // 表示不超过k条边的最短距离
  const dis = Array(len).fill(Infinity);
  dis[0] = 0;
  for (let i = 0; i < k; i++) {
    const backup = [...dis]; 
    // 使用backup数组是以为每次松弛操作的时候，需要使用上一次的距离更新，否则会出现传递
    // 比如有[1, 2, 2]和[2, 3, 2]这两个边，使用本次的dis就会先更新dis[2]，再传递到dis[3]，但是没有 1->3 这条边
    for (let j = 0; j < len; j++) {
      const [u, v, w] = edges[j];
      if (dis[v] > backup[u] + w) {
        dis[v] = backup[u] + w;
      }
    }
  }

  return dis[len - 1] >= Infinity / 2 ? -1 : dis[len - 1];
};