// 并查集(近乎O(1))
// 1. 将两个集合合并
// 2. 询问两个元素是否在一个集合当中
// 基本原理：用树的形式来维护集合，集合的编号是根节点的编号，对每个节点都存储它的父节点
// p[x] 表示 x 的父节点

// S1. 判断树根p[x] == x
// S2. 求X的集合编号 while(p[x] != x) x = p[x];
// S3. 合并集合 p[x]是x的集合编号 py是y的集合编号 p[x] = y;
// 路径压缩优化

const N = 100010;

// 初始化时每个节点都是独立的集合 所以p[i] = i
const p = Array(N).fill(0).map((item, index) => item = index); //每个元素的父节点
console.log(p);
function find(x) { // 返回x的祖宗节点
    if (p[x] != x) {
        p[x] = find(p[x]);
    }

    return p[x];
}

function merge(a, b) {
    p[find(a)] = find(b);
}

function isSameSet(a, b) {
    return find(a) == find(b);
}

merge(2, 3);
console.log(p);
alert(isSameSet(2, 3));