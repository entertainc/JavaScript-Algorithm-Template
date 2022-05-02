function preSum(arr) {
    let n = arr.length;
    let m = arr[0].length;

    let res = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
    

    for (let i = 1; i <= n; i ++) {
        for (let j = 1; j <= m; j ++) {
             res[i][j] = res[i - 1][j] + res[i][j - 1] - res[i - 1][j - 1] + arr[i - 1][j - 1];
        }
    }

    return res;
}

let t = preSum([[1, 2], [3, 4], [5, 6]]);
t.forEach(item => console.log(item));