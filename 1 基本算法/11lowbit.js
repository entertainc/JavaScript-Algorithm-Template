// lowbit操作可以返回x二进制中最后一个1的位置

function lowbit(x) {
    return x & -x
}

function judge1(num) {
    let res = 0;
    while(num) {
        num = num & (num - 1);
        res ++;
    }

    return res;
}
//判断某个num中1的总数

let num = 8;
let res = 0;
while(num) {
    num -= lowbit(num);
    res ++;
}

alert(res);
