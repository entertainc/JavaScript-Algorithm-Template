// 匈牙利算法 O(M * N)
// 给定二分图求最大匹配

function XYL(n, n1) { // n个点 左边有n1个点, 右边有n2个点

    let match = Array(n).fill(0);
    let st = Array(n).fill(false); //存储左边这个点是否匹配过右边这个点
    let h = Array(2 * n).fill(-1);
    let e = Array(2 * n).fill(0);
    let ne = Array(2 * n).fill(0);
    let index = 0;

    function find(x) {
        for (let i = h[x]; i != -1; i = ne[i]) {
            let j = e[i];

            if (!st[j]) { // 如果没有匹配
                st[j] = true;

                if (match[j] == 0 || find(match[j])) {
                    match[j] = x;
                    return true;
                }
            }
        }

        return false;
    }

    let res = 0;

    for (let i = 1; i <=n1; i ++) {
        st.fill(false);
        if (find(i)) res ++;
    }

    console.log("最大匹配对数 = ", res);
}