// O(M logM)
// S1. 将所有边按权重从小到大排序 O(M log M)
// S2. 枚举每条边a, b 权重是c
// S3.  if(a, b不连通) 将a, b加入集合中

function kruskal(n, edges) {
    edges.sort((a, b) => a[2] - b[2]);
    let res = 0;
    let cnt = 0; //加了多少条边
    let p = Array(n).fill(0).map((item, index) => item = index);

    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }

        return p[x];
    }

    for (let i = 0; i < edges.length; i ++) {
        let [a, b, c] = edges[i];
        a = find(a);
        b = find(b);

        if (a != b) {
            res += c;
            p[a] = b;
            cnt ++;
        }
    }

    if (cnt < n - 1) {
        console.log("不存在最小生成树")
    }  else  {
        console.log("最小生成树的权值为: ", res);
    }
} 