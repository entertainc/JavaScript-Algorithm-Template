// 离散化 值域0-1e9  个数1e5
/*
    1. a[]中可能有重复元素
    2. 如何算出x离散化后的值
*/
function discretize(arr) {
    let afterDis = [...new Set(arr)].sort((a, b) => a - b);

    return function(x) {
        let l = 0, r = afterDis.length - 1;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (afterDis[mid] >= x) {
                r = mid;
            }  else  {
                l = mid + 1;
            }
        }

        return r; // 映射到0, 1, 2 ...
    }

}

arr = [1, 2, 2, 5, 2, 6, 4];
let find = discretize(arr);
console.log(find(4));

