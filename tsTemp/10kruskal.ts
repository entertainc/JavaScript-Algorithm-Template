// 结构体存储图
type edge = {
  a: number;  // from
  b: number;  // to
  w: number;  // weight;
}

const n: number = 100;
const edges: Array<edge> = Array(n).fill({a: 0, b: 0, w: 0});
const p: Array<number> = Array(n).fill(0);
const dis: Array<number> = Array(n + 1).fill(Infinity);

const find = (num: number): number => {
  if (num != p[num]) {
    p[num] = find(p[num]);
  }
  return p[num];
}

const merge = (a: number, b: number): void => {
  p[find(b)] = find(a);
}

const kruskal: () => number = (): number => {
  let res = 0;
  let cnt = 0;
  edges.sort((a, b) => a.w - b.w);

  for (let i = 0; i < edges.length; i ++) {
    const {a, b, w}: edge = edges[i];
    if (find(a) != find(b)) {
      p[find(b)] = find(a);
      res += w;
      cnt ++;
    }
  }

  if (cnt < n -1) {
    return -1;
  }
  return res;
}