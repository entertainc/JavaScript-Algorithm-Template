// 树状数组
const MAXSIZE = 10;
const numbers: number[] = Array(MAXSIZE).fill(Math.floor(Math.random() * 10));
const tr: number[] = Array(MAXSIZE + 1).fill(0);

const add = (idx: number, payload: number): void => {
  for (; idx <= MAXSIZE; idx += idx & (- idx)) {
    tr[idx] += payload;
  }
  return ;
}

const query = (idx: number): number => {
  let res: number = 0;
  for(; idx; idx &= (idx - 1)) {
    res += tr[idx];
  }
  return res;
}