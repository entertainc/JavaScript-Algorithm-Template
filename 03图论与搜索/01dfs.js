// 深度优先搜索 空间O(h)
// 1. 回溯
// 2. 剪枝

// dfs个人理解：1.需要写函数出口 2.递归完成一件事 3.剪枝优化

// 1. 全排列

const N = 1000010;
const visit = Array(N).fill(false);
const path = [];
let res = [];

function dfs1(n, k, path) {
    if (k == n) {
        // console.log(path.join(""));
        res.push([...path]);
        return ;
    }

    for (let i = 1; i <= n; i ++ ) {
        if (!visit[i]) {
            visit[i] = true;
            path.push(i);
            dfs1(n, k + 1, path);
            path.pop();
            visit[i] = false;
        }
    }
}

let t = 3;

dfs1(t, 0, path);
// console.log("res = ", res);


// 2. 八皇后
// 法一：
let n = 5;
const graph = Array(n).fill(0).map(_ => Array(n).fill('*'));
const row = Array(n + 1).fill(false);
const col = Array(n + 1).fill(false);
const dg = Array(2 * n).fill(false); // 表示对角线
const udg = Array(2 * n).fill(false); // 表示反对角线
// console.log(graph);

function dfs(n, u) { // u表示行, i表示列
    if (u == n) {
        graph.forEach(item => console.log(item));
        console.log("------------------------")
        return ;
    }

    for (let i = 0; i < n; i ++) {
        if (!col[i] && !dg[u + i] && !udg[n - u + i]) {
            graph[u][i] = 'Q';
            col[i] = dg[u + i] = udg[n - u + i] = true;
            dfs(n, u + 1)
            col[i] = dg[u + i] = udg[n - u + i] = false;
            graph[u][i] = '*';
        }
    } 
} 

// dfs(5, 0);

// 法二：
/**
 * @param {number} x x和y是搜索的坐标
 * @param {number} y 
 * @param {number} k k是当前皇后的个数
 * @param {number} n 
 */

function dfs2(x, y, k, n) {
    if (y == n) {
        x ++;
        y = 0;
    }

    if (x == n) {
        if (k == n) {
            graph.forEach(item => console.log(item));
            console.log("------------------------")
        }
        return ;
    }``

    // 不放
    dfs2(x, y + 1, k, n);

    // 放
    if (!row[x] && !col[y] && !dg[x + y] && !udg[n - y + x]) {
        graph[x][y] = 'Q';
        row[x] = col[y] = dg[x + y] = udg[n - y + x] = true;
        dfs2(x, y + 1, k + 1, n);
        row[x] = col[y] = dg[x + y] = udg[n - y + x] = false;
        graph[x][y] = '*';
    }
}

dfs2(0, 0, 0, 5)