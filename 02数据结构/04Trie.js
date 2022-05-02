// Trie：高效地存储和查找字符串集合的数据结构


const N = 100010;
const son = Array(N).fill(0).map(() => Array(26).fill(0));
const cnt = Array(N).fill(0);
let idx = 0; // 下标是0的点，既是根节点又是空节点

function insert(str) { // 
    let p = 0;

    for (let char of str) {
        let u = char.charCodeAt() - 97;

        if (!son[p][u]) 
            son[p][u] = ++ idx;
        p = son[p][u];
    }

    cnt[p] ++;
}


/**
 * @param {string} str 
 * @return {number} 
*/
function query(str) {
    let p = 0;
    for (let char of str) {
        let u = char.charCodeAt() - 97;

        if (!son[p][u])
            return 0;
        p = son[p][u]
    }

    return cnt[p];
} 

insert('abcd')
insert('abcd')
insert('abcde')
console.log(query('abc'))
console.log(query('abcd'));