// 假设存在heap这一数据结构
const heap = [];
const down = idx => {};
const up = idx => {};
const w = []; // 权重
const e = []; // 节点编号
const ne = []; // 下一个节点的编号
const h = []; // 头节点
const NodeNum = 100;
const heapDijkstra = () => {
  const dis = Array(NodeNum).fill(Infinity);
  const st = Array(NodeNum).fill(false);
  dis[1] = 0;
  heap.push([1, 0]); //[节点号， 距离]
  
  for (let i = 0; i < NodeNum; i++) {
    const [nodeId, distance] = heap.shift();

    if (st[nodeId]) {
      continue;
    }

    st[nodeId] = true;
    for (let i = h[nodeId]; i !== -1; i = ne[i]) {
      let j = e[i]; // 连接的节点的编号

      if (dis[j] > distance + w[i]) {
        dis[j] = distance + w[i];
        heap.push([j, dis[j]]);
      }
    }

  }

};