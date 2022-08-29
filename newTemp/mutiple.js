// 不使用 * / 计算num * times
// 受到快速幂的启发
const pow = (num, times) => {
  let res = 0;
  while (times) {
    if (times & 1) {
      res += num;
    }
    num <<= 1;
    times >>= 1;
  }
  return res;
};
console.log(pow(34876, 23));