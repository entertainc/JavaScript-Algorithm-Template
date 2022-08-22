const MAXSIZE: number = 10;
const numbers: number[] = Array(MAXSIZE).fill(Math.floor(Math.random() * 10));
type node = {
  l: number;
  r: number;
  data: number;
}
function getNode({l, r, data}: node): node {
  this.l = l;
  this.r = r;
  this.data = data;
  return this;
}

const tr: node[] = Array(4 * MAXSIZE).fill(getNode({l: 0, r: 0, data: 0}));

const build = (p: number, l: number, r: number): void => {
  tr[p].l = l;
  tr[p].r = r;
  if (l == r) {
    tr[p].data = numbers[l - 1];
    return ;
  }

  const mid: number = l + ((r - l) >> 1);
  build(2 * p, l, mid);
  build(2 * p + 1, mid + 1, r);
  tr[p].data = Math.max(tr[2 * p].data, tr[2 * p + 1].data);
}

const change = (p: number, l: number, r: number, x: number, v: number): void => {  // 将numbers[x]修改为v
  if (tr[p].l == tr[p].r) {
    tr[p].data = v;
    return ;
  }
  const mid = l + ((r - l) >> 1);
  if (x <= mid) {
    change(2 * p, l, mid, x, v);
  } else {
    change(2 * p + 1, mid + 1, r, x, v);
  }
  tr[p].data = Math.max(tr[2 * p].data, tr[2 * p + 1].data);
}

const query = (p: number, l: number, r: number): number => {
  if (tr[p].l >= l && tr[p].r <= r) {
    return tr[p].data;
  }
  let mid = tr[p].l + ((tr[p].r - tr[p].l) >> 1);
  let res = -(1 << 30);
  if (l <= mid) {
    res = Math.max(res, query(2 * p, l, r));
  } 
  if (r > mid) {
    res = Math.max(res, query(2 * p + 1, l, r));
  }
  return res;
}