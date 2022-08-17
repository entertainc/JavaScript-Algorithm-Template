const number = [3, 6, 4, 8, 1, 2, 9, 5, 7, 0];
const len = number.length; 
class node {
  constructor(l, r, data, id) {
    this.l = l;
    this.r = r;
    this.data = data;
    this.id = id;
  }
}
// eslint-disable-next-line max-statements-per-line
const tArr = new Array(4 * len + 1).fill(0).map((num, idx) => new node(0, 0, 0, idx));

// 1. 构建线段树
const build = (p, l, r, numbers) => {
  tArr[p].l = l;
  tArr[p].r = r;
  // 
  if (l === r) {
    tArr[p].data = numbers[l - 1];
    return;
  }
  let mid = l + ((r - l) >> 1);
  build(2 * p, l, mid, numbers);
  build(2 * p + 1, mid + 1, r, numbers);
  tArr[p].data = Math.max(tArr[2 * p].data, tArr[2 * p + 1].data);
};

// 初始化
build(1, 1, len, number);
// const fArr = tArr.filter(item => item.l !== 0);
// fArr.sort((a, b) => a.idx - b.idx);
console.log(tArr);

// 2. 单点修改，将numbers[x]的值修改为v
const change = (p, l, r, x, v) => { // x是numbers的下标，v是修改后的值
  if (tArr[p].l === tArr[p].r) {
    console.log('到达');
    tArr[p].data = v;
    return;
  }

  let mid = l + ((r - l) >> 1);
  if (x <= mid) {
    change(2 * p, l, mid, x, v);
  } else {
    change(2 * p + 1, mid + 1, r, x, v);
  }

  tArr[p].data = Math.max(tArr[2 * p].data, tArr[2 * p + 1].data);
};

change(1, 1, len, 6, 10);
change(1, 1, len, 6, 9);

// 3. 查询区间[l, r]上的最大值
//  3.1 如果l, r覆盖了该点代表的区间，则return
//  3.2 如果l <= mid，则递归访问左子节点
//  3.3 如果r > mid, 则递归访问右子节点
const query = (p, l, r) => {
  if (l <= tArr[p].l && r >= tArr[p].r) {
    return tArr[p].data;
  }
  let mid = tArr[p].l + ((tArr[p].r - tArr[p].l) >> 1);

  let res = -(1 << 30);
  if (l <= mid) {
    res = Math.max(res, query(p * 2, l, r));
  }  
  if (r > mid) {
    res = Math.max(res, query(p * 2 + 1, l, r));
  }  
  return res;
};

console.log('MAX[1, 7] = ', query(1, 1, 7));