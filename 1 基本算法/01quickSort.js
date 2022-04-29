/*
    快速排序
        1. 确定分界点 x: q[l] q[(l + r) / 2] q[r] 随机
        2. 调整范围 让分界点左边都小于等于x 右边都大于等于x
        3. 递归左右两边
*/

function qSort(arr, l, r) {
    if (l >= r) return ;
    const x = arr[(l + r) / 2];
    let i = l - 1;
    let j = r + 1;
    while(i < j) {
        do {i ++} while(arr[i] < x);
        do {j --} while(arr[j] > x);
    
    if (i < j)
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    qSort(arr, l, j);
    qSort(arr, j + 1, r);

}