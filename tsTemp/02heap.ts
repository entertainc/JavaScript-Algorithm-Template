// 这里实现小根堆

const MAXSIZE = 1e9;
const heap: number[] = Array(MAXSIZE).fill(0);
let idx: number = 1;
const swap: (a1: number, a2: number) => void = (x1, x2): void => { return ;};  //假设有swap函数

interface opType<T> { // up和down两个操作的类型
  (idx: T): void;
}

const up: opType<number> = (idx: number): void => {
  while (idx && heap[idx] < heap[idx >> 1]) {
    swap(heap[idx], heap[idx >> 1]);
    idx = idx >> 1;
  }

  return ;
};

const down: opType<number> = (idx: number): void => {
  let u: number = idx;
  if (2 * idx < MAXSIZE && heap[u] > heap[2 * idx]) {
    u = 2 * idx;
  }

  if (2 * idx + 1 < MAXSIZE && heap[u] > heap[2 * idx + 1]) {
    u = 2 * idx + 1;
  }

  if (u !== idx) {
    swap(heap[u], heap[idx]);
    down(u);
  }
  return ;
};

const insert: opType<number> = (data: number): void => {
  heap[idx] = data;
  up(idx ++);
};

const remove: opType<number> = (loc: number): void => {
  heap[loc] = heap[-- idx];
  down(loc);
  up(loc);
}