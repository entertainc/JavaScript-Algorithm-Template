// O(N ** 3) 邻接矩阵存储边


/**
 * @param {number} n 
 * @param {number[]} d //邻接矩阵
 */

function Floyd(n, d) {
    for (let k = 1; k <= n; i ++) {
        for (let i = 1; i <= n; i ++) {
            for (let j = 1; j <= n; j ++) {
                d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j])
            }
        }
    } 
}