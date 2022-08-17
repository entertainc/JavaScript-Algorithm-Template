const strs = ['sdasasd', 'sdihas', 'usdyaiu', 'siuady', 'yutdue', 'akdha'];
const N = 100010;
const son = new Array(N).fill(0).map(_ => Array(26).fill(0));
const cnt = new Array(N).fill(0);
let idx = 0; // 控制层数 

const insert = str => {
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let u = str[i].charCodeAt() - 97;
    if (!son[p][u]) {
      son[p][u] = ++idx; // 因为idx=0表示根节点层，所以必须要++idx才能让数据正常存储
    }
    p = son[p][u];
  }
  cnt[p]++;
};

const query = str => {
  let p = 0;
  for (let char of str) {
    let u = char.charCodeAt() - 97;
    if (!son[p][u]) {
      return 0;
    }
    p = son[p][u];
  }
  return cnt[p];
};

for (let i = 0; i < strs.length; i++) {
  insert(strs[i]);
  console.log('i = ', query(strs[i]));
}
console.log(query(strs[0]));