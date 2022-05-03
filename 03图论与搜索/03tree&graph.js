// 图与树的存储与bfs&dfs

//邻接表

class adjList {
    constructor(){
        const N = 100010;
        const M = N * 2;

        const h = Array(N).fill(-1);
        const e = Array(M).fill(0);
        const ne = Array(M).fill(0);
        let index = 0;

        function add(a, b) { //a->b之间有一条边
            e[index] = b;
            ne[index] = h[a];
            h[a] = index ++;
        }
    }
}