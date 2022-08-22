// [i, j, k] = min([i, j, k - 1], [i, k - 1, k -1], [k - 1, j, k - 1)
const n: number = 100;
const dis: Array<Array<number>> = Array(n + 1).fill(Array(n + 1).fill(0));

const floyd: () => void = (): void => {
  for (let k = 1; k <= n; k ++) {
    for (let i = 1; i <= n; i ++) {
      for (let j = 1; j <= n; j ++) {
        dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j]);
      }
    }
  }
}