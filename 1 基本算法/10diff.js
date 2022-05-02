/*
    差分数组主要处理下列情况：
        数组arr[l, r]中每个数加c
        对差分数组修改 diff[l] + c, diff[r + 1] - c
*/
function diffArr(arr, l, r, c) { //原数组赋值操作可以看成[l, l] + c
    let res = Array(arr.length + 1).fill(0);

    res[l] + c;
    res[r + 1] - c;

    return res;
}

function diff2dArr(arr, x1, y1, x2, y2, c) { //原数组赋值操作可以看成[l, l] + c
    let res = Array(arr.length + 1).fill(0).map(_ => Array(arr[0].length + 1).fill(0) );

    res[x1][y1] += c;
    res[x1][y2] -= c;
    res[x2][y1] -= c;
    res[x2][y2] += c;

    return res;
}