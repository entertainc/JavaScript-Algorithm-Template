// 堆优化版本bellman-ford
// 邻接表存图
const n: number = 100;
const h: Array<number> = Array(n).fill(-1);
const e: Array<number> = Array(n).fill(0);
const ne: Array<number> = Array(n).fill(0);
const w: Array<number> = Array(n).fill(0);
const queue: Array<number> = [];
const dis: Array<number> = Array(n + 1).fill(Infinity); 
const st: Array<boolean> = Array(n + 1).fill(false);

const spfa:() => void = (): void => {
  dis[1] = 0;
  queue.push(1);
  st[1] = true;

  while(queue.length) {
    const top: number = queue.shift() || 0;
    st[top] = false;

    for (let i = top; i != -1; i = ne[i]) {
      let j = e[i];
      if (dis[j] > dis[top] + w[i]) {
        dis[j] = dis[top] + w[i];
        if (!st[j]) {
          queue.push(j);
        }
      }
    }
  }
};

