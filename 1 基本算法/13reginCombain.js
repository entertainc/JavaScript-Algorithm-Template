// 区间合并
// 应用场景 如果有两个区间有交集就合并区间

/*
    S1. 按区间左端点排序
    S2. 扫描区间进行合并
*/
/**
 * 
 * @param {number[number[]]} arr 
 * @returns {number}
 */
function merge(arr) {
    let res = []; //区间合并后的区间个数

    arr.sort((a, b) => a[0] - b[0]);
    console.log(arr);

    //st是区间的起点, ed是区间的终点
    let st = -2e9;
    let ed = -2e9;
    
    for (let seg of arr) {
        if (ed < seg[0]) {
            if (st != -2e9) {
                res.push([st, ed])
                console.log("st = ", st, "ed = ", ed);
            }
            st = seg[0];
            ed = seg[1];
        }  else  {
            ed = Math.max(ed, seg[1]);
        }
    }

    if (st != -2e9) {
        res.push([st, ed]);
        console.log("st = ", st, "ed = ", ed);
    }
    return res;
}

arr = [[1, 5], [3, 4], [6, 8], [2, 4], [2, 3], [9, 10]];

console.log(merge(arr));