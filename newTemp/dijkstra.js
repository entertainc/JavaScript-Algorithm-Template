const w = [[100, 100, 100, 100, 100], [100, 0, 2, 3, 1000], [100, 2, 0, 1000, 4], [100, 3, 1000, 0, 2], [100, 1000, 4, 2, 23]];
let len = w[1].length - 1;
const dijkstra = () => {
  const dis = Array(len + 1).fill(Infinity);
  const st = Array(len + 1).fill(false);
  dis[1] = 0;
  console.log('len = ', len);
  
  for (let i = 0; i < len; i++) {
    let t = -1;
    // console.log('t = ', t);
    for (let j = 1; j <= len; j++) {
      if (!st[j] && (t === -1 || dis[t] > dis[j])) {
        t = j;
      }
    }
    console.log('t = ', t);
    
    st[t] = true;

    for (let j = 1; j <= len; j++) {
      dis[j] = Math.min(dis[j], dis[t] + w[t][j]);
    }
  }

  console.log('dis = ', dis);
};

dijkstra();