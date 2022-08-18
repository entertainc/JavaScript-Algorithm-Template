// 找到离集合最近的点
// 用t更新距离
const maxNodeNum = 100;
const n = maxNodeNum;
const prim = () => {
	const dis = Array(n).fill(Infinity);
	const st = Array(n).fill(false);
	let res = 0; //最小生成树的长度
	for (let i = 0; i < n; i++) {
		let t = -1;

		for (let j = 0; j < n; j++) {
			if (!s[j] && (t == -1 || dis[j] < dis[t])) t = j;
		}

		if (i && dis[t] == Infinity)
			// 说明图不连通，没有最小生成树
			return -1;

		if (i) res += dis[t]; // 只要不是第一个点，就加入树

		for (let j = 0; j < n; j++) {
			if (g[t][j]) dis[j] = Math.min(dis[j], g[t][j]);
		}

		st[t] = true;
	}
};
