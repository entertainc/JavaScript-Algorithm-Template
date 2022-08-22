const p: number[] = []; // 父亲数组
interface findType<T>{
  (arg: T): T;
}
interface mergeType<T> {
  (arg1: T, arg2: T): void;
}

const find: findType<number> = (x : number): number => {  //查找父亲节点
  if (x != p[x]) {
    p[x] = find(p[x]);
  }
  return p[x];
}

const merge: mergeType<number> = (a: number, b: number): void => {
  // 将b的父亲合并到a的父亲上
  if (find(a) != find(b)) {
    p[find(b)] = find(a);
  }
  return ;
}