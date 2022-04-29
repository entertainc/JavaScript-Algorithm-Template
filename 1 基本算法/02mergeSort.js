/*
    归并排序
        1. 先递归
        2. 归并
 */
const temp = [];

function mSort(arr, l, r) {
    if (l >= r) return;

    const mid = (l + r) / 2;
    mSort(arr, l, mid);
    mSort(arr, mid + 1, r);

    let k = 0, i = l, j = mid + 1;
    while (i <= mid && j < r) {
        if (arr[i] < arr[j]) {
            temp[k ++] = arr[i ++];
        }  else  {
            temp[k ++] = arr[j ++];
        }
    }

    while (i <= mid) temp[k ++] = arr[i ++];
    while (j <= mid) temp[k ++] = arr[j ++];

    for (i = l, k = 0; i <= r;) {
        arr[i ++] = temp[k ++];
    }
}