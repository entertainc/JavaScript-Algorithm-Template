// Trie树
const MAXSIZE: number = 1e6;
const son: Array<Array<number>> = Array(MAXSIZE).fill(new Array(26).fill(0));
const cnt: Array<number> = Array(MAXSIZE).fill(0);
let idx: number = 1;

const insert: (str: string) => void = (str: string): void => {
  let p: number = 0;
  for (let char of str) {
    let u: number = char.charCodeAt(0) - 97;
    if (!son[p][u]) {
      son[p][u] = idx ++;
    }
    p = son[p][u];
  } 
  cnt[p] ++;
}

const query: (str: string) => number = (str: string): number => {
  let p: number = 0;
  for (let char of str) {
    let u = char.charCodeAt(0) - 97;
    if (!son[p][u]) {
      return -1;
    }
    p = son[p][u];
  }
  return cnt[p];
}