// 计算pow(num, times);

const quickPow = (num, times) => {
  let res = 1;
  while (times) {
    if (times & 1) {
      res *= num;
    }
    num *= num;
    times >>= 1;
  }
  return res;
};

console.log(quickPow(2, 10));