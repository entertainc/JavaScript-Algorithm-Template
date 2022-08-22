// 邻接表存储
// h表示邻接表的头结点
// e表示(a -> b)中的b
// ne表示下一个链表的位置即，若e[idx] = b，则ne[preIdx] = idx;
// w[idx] = (a->b)的权重

const spfa = n => { // 到n的最短路
  const dis = new Array(n).fill(Infinity);
  const st = new Array(n).fill(false);
  const queue = [];
  queue.push(1);
  dis[1] = 0;
  st[1] = true;
  
  while (queue.length) {
    let node = queue.shift();
    st[node] = false;

    for (let i = h[node]; i !== -1; i = ne[i]) {
      let j = e[i];
      if (dis[j] > dis[node] + w[i]) {
        dis[j] = dis[node] + w[i];
        if (!st[j]) {
          queue.push(j);
          st[j] = true;
        }
      }
    }
  }
};