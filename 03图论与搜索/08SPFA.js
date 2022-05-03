// O(M) 要求图中不包含负环 处理有负权边
// 队列存放所有变小的节点
// 只要队列不空 
// S1. 取出队头t
// S2. 更新t的所有出边
// S3. 更新成功之后并且不在队列中 进入队列
function SPFA(n) { // 到n的最短路
    const N = 100010;
    const inf = 2e9 + 1;
    const dist = Array(N).fill(inf);
    const st = Array(N).fill(false); //判断节点是否在队列中

    dist[1] = 0;
    const queue = [];
    queue.push(1);
    st[1] = true;

    while(queue.length) {
        let t = queue.pop();

        st[t] = false;

        for (let i = h[t]; i != -1; i = ne[i]) {
            let j = e[i];

            if (dist[j] > dist[t] + w[i]) {
                dist[j] = dist[t] + w[i];
                if (!st[j]) {
                    queue.push(j);
                    st[j] = true;
                }
            }
        }
    }

    if (dist[n] === inf)
        return -1;
    return true;
}