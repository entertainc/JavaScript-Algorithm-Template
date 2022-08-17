const number = [3, 6, 4, 8, 1, 2, 9, 5, 7, 0];
const len = number.length + 1;
let heap = new Array(len + 3).fill(100);
let idx = 1;

const swap = (x, y) => {
  // pass
};

// 实现小根堆
const up = idx => {
  while (idx >> 1 && heap[idx >> 1] > heap[idx]) {
    [heap[idx], heap[idx >> 1]] = [heap[idx >> 1], heap[idx]];
    idx >>= 1;
  }
};

const down = idx => {
  if (idx > len) {
    return;
  }
  let u = idx;
  if (2 * idx < len && heap[u] > heap[2 * idx]) {
    [heap[idx * 2], heap[u]] = [heap[u], heap[idx * 2]];
    u = 2 * idx;
  }
  if (2 * idx + 1 < len && heap[u] > heap[2 * idx + 1]) {
    [heap[u], heap[2 * idx + 1]] = [heap[2 * idx + 1], heap[u]];
    u = 2 * idx + 1;
  }
  if (idx !== u) {
    down(u);
  }
};

const insert = num => {
  heap[idx] = num;
  up(idx++);
};

const removeHead = () => {
  heap[1] = heap[--idx];
  down(1); 
};

const removeLoc = k => {
  if (k >= idx) {
    return;
  }
  heap[k] = heap[--idx];
  down(k);
  up(k);
};

for (let i = 0; i < len - 1; i++) {
  insert(number[i]);
}

insert(-1);
console.log('idx = ', idx);
// removeHead();
removeLoc(2);
console.log('idx = ', idx);
console.log(heap);
