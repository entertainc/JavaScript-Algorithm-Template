// p是并查集的p数组，保证一个边的两端不在同一侧集合中
// edges[u, v, w]，是边的两侧端点与边权
const n = (NodeNum = 100);
const kruskal = (p, edges) => {
	const find = (x) => {
		if (x != p[x]) p[x] = find(p[x]);
		return p[x];
	};
	let res = 0;
	let cnt = 0;

	edges.sort((a, b) => a[2] - b[2]); //按权重排序

	for (let edge of edges) {
		const [a, b, w] = edge;
		let parentA = find(a);
		let parentB = find(b);

		if (parentA != parentB) {
			res += w;
			p[parentB] = parentA;
			cnt++;
		}
	}

	if (cnt != n - 1) return -1;

	return res;
};
