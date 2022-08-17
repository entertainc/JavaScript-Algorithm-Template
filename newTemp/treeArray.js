const len = 16;
const numbers = new Array(len).fill(0).map((num, idx) => (idx + 1) ** 2);
const preSum = new Array(len + 1).fill(0);
for (let i = 1; i <= len; i++) {
  preSum[i] = preSum[i - 1] + numbers[i - 1];
}

const tArr = new Array(len + 1).fill(0);

const add = (x, y, tArr) => {
  for (; x <= len; x += (x & (-x))) {
    tArr[x] += y;
  }
};

// 初始化，对每个点进行add操作
for (let i = 1; i <= len; i++) {
  add(i, numbers[i - 1], tArr);
  console.log(`tArr[${i}] = `, tArr[i]);
}

// 查询[1, x]的前缀和
const ask = (x, tArr) => {
  let res = 0;
  for (; x; x -= (x & (-x))) {
    res += tArr[x];
    //
    console.log('x = ', x, `tArr${x} = `, tArr[x], 'res = ', res);
  } 
  return res;
};
// console.log('numbers = ', numbers);

// 查询[l, r]的和
const askRegion = (l, r, tArr) => {
  let res = ask(r, tArr) - ask(l - 1, tArr);
  return res;
};

console.log('preSum = ', preSum[10], 'tArr = ', ask(10, tArr));
console.log('SUM[2, 10] = ', preSum[10] - preSum[1], askRegion(2, 10, tArr));