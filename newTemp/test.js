// tarr
const N = 10010;
const t = new Array(N).fill(0);
const add = (x, num) => {
  for (; x <= N; x += x & (-x)) {
    t[x] += num;
  }
};

const query = x => {
  let res = 0;
  for (; x; x = x & (x - 1)) {
    res += t[x];
  }
  return res;
};

// segTree
function node(l = 0, r = 0, data = 0, idx) {
  this.l = l;
  this.r = r;
  this.data = data;
  this.idx = idx;
}

const tr = new Array(N).fill(0).map((num, idx) => new node(0, 0, 0, idx));
const nums = new Array(N); // 需要被建树的数组
const build = (p, l, r) => {
  if (tr[p].l === tr[p].r) {
    tr[p].data = nums[l];
    return;
  }
  let mid = l + ((r - l) >> 1);
  build(2 * p, l, mid);
  build(2 * p + 1, mid + 1, r);
  tr[p].data = Math.max(tr[p * 2].data, tr[p * 2 + 1].data);
};

const change = (p, l, r, x, v) => {
  if (tr[p].l === tr[p].r) {
    tr[p].data = v;
    return;
  }

  let mid = l + ((r - l) >> 1);
  if (x <= mid) {
    change(2 * p, l, mid, x, v);
  } else {
    change(2 * p + 1, mid + 1, r, x, v);
  }
};

const queryS = (p, l, r) => {
  if (l <= tr[p].l && r >= tr[p].r) {
    return tr[p].data;
  }
  let res = -(1 << 30);
  let mid = l + ((r - l) >> 1);
  if (l <= mid) {
    res = Math.max(res, queryS(2 * p, l, r));
  }
  if (r > mid) {
    res = Math.max(res, queryS(2 * p + 1, l, r));
  }
  return res;
};

// 并查集
const p = new Array(N).fill(0).map((num, idx) => idx + 1);
const find = x => { // 路径压缩
  if (x !== p[x]) {
    p[x] = find(p[x]);
  }
  return p[x];
};
const merge = (x1, x2) => { // 将x2合并到x1;
  p[find(x2)] = find(x1);
};