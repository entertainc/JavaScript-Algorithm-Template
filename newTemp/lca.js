// 倍增法求lca
let MAXSIZE = 1000; // 节点数
let n = MAXSIZE;

let fa = Array(n).fill(new Array(31).fill(Infinity)); //
let v = Array(n).fill(0); // 边
let w = Array(n).fill(0); // 权重
let cost = Array(n).fill(new Array(31).fill(Infinity)); // 不太清楚
let dep = Array(n).fill(0); // dep[i]表示根节点到节点i的路径

const dfs = (root, fno) => { // 传入起始节点与它的根节点，初始化
  fa[root][0] = fno;
  dep[root] = dep[fno] + 1;
  for (let i = 1; i < 31; i++) {
    fa[root][i] = fa[fa[root][i - 1]][i - 1];
    cost[root][i] = cost[cost[root][i - 1]][i - 1];
  }

  let sz = v[root].length;
  for (let i = 0; i < sz; i++) {
    if (v[root][i] === fno) { 
      continue;
    }
    cost[v[root][i]][0] = w[root][i];
    dfs(v[root][i], root);
  }
};

const lca = (x, y) => { // 求节点
  if (dep[x] > dep[y]) {
    [x, y] = [y, x];
  }
  let tmp = dep[y] - dep[x];
  for (let i = 0; tmp; tmp >>= 1, i++) {
    if (tmp & 1) {
      y = fa[y][i];
    }
  }
  if (y == x) {
    return;
  }
  for (let i = 31; i >= 0; i --) {
    if (fa[x][i] != fa[y][i]) {
      x = fa[x][i];
      y = fa[y][i];
    }
  }

  // 再走最后一步
  return fa[x][0];
};

