/**
                |---开放寻址法
     |---存储结构
     |          |---拉链法
哈希表
     | 
     |---字符串哈希方式
*/

// 哈希时取模的数最好是质数并且尽量离2的整数次方远

function Hash() {  // 拉链法
    const N = 1e5;
    const h = Array(N).fill(-1);
    const e = Array(N).fill(0);
    const ne = Array(N).fill(0);
    let index = 0;

    this.insert = function(x) {
        let k = (x % N + N) % N 
        e[index] = k;
        ne[index] = h[k];
        h[k] = index ++; 
    }

    this.query = function(x) {
        let k = (x % N + N) % N;

        for (let i = h[k]; i != -1; i = ne[i]) {
            if (e[i] == x)
                return true;
        }

        return false;
    }

}

function Address() {  // 开放寻址法
    const N = 1e5;
    const h = Array(N).fill(null); //假设1e9+2大于数据范围

    this.find = function(x) {
        let k = (x % N + N) % N;

        while(h[k] != null && h[k] != x) {
            k ++;
            if (k == N) k = 0;
        }

        return k;
    }

    this.insert = function(x) {
        let k = find(x);
        h[k] = x;
    }

    this.query = function(x) {
        let k = find(x);
        if (h[k] == null) 
            return false;
        return true;
    }
}

let map = new Hash();
console.log(map);
map.insert(1);
console.log(map.query(1));