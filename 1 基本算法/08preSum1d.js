/*前缀和数组*/

function preSum(arr) {
    preSumofArr = new Array(arr.length).fill(0);

    for (let i = 1, len = arr.length; i <= len; i ++) {
        preSumofArr[i] = preSumofArr[i - 1] + arr[i - 1];
    }

    return preSumofArr;
}

console.log(preSum([2, 3, 5, -1]));