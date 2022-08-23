// 使用结构体存储图
type edge = {
  a: number;  // from
  b: number;  // to
  w: number;  // weight;
}

const n: number = 100;
const edges: Array<edge> = Array(n).fill({a: 0, b: 0, w: 0});
const dis: Array<number> = Array(n + 1).fill(Infinity);

const bellmanford: (arg: number) => void = (k: number): void => {
  dis[1] = 0;

  for (let i = 1; i <= k; i ++) {
    const backup: Array<number> = [...dis];
    for (let j = 0; j < n; j ++) {
      const {a, b, w} = edges[j];
      dis[b] = Math.min(dis[b], backup[a] + w);    
    }
  }
};