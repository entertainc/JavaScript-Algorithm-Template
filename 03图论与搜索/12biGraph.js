// 染色法判断是不是二分图  O(m + n)
// 一个图是二分图当且仅当图中不含奇数环

function ranse(n) { //节点数
    color = Array(n).fill(false); // 判断染色
    let h = Array(2 * n).fill(-1);
    let e = Array(2 * n).fill(0);
    let ne = Array(2 * n).fill(0);
    let index = 0;
    let flag;

    function add(a, b) {
        e[index] = b;
        ne[index] = h[a];
        h[a] = index ++; 
    }

    function dfs(u, c) { //u是节点, c是颜色
        for (let i = h[u]; i != -1; i = ne[i]) {
            let j = e[i];

            if (!color[i]) {
                if(!dfs(j, 3 - c)) 
                    return false;
            }  else  {
                if (color[i] === c)
                    return false;
            }
        }

        return true;
    }

    for (let i = 1; i <= n; i ++) {
        if (!color[i]) {
            if (!dfs(i, 1)) {
                flag = false;
                break;
            }
        }
    }
}

