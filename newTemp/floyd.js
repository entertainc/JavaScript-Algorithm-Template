// 多源最短路 dp
// 邻接矩阵存储图
const NodeNum = 100;
const dis = [[]];
const floyd = () => {
	for (let k = 0; k < NodeNum; k++) {
		for (let j = 0; j < NodeNum; j++) {
			for (let i = 0; i < NodeNum; i++)
				dis[i][j] = Math.min(dis[i][j], dis[i][k] + dis[k][j]);
		}
	}
};
