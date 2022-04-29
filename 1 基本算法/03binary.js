/*
    二分(两个板子) 整数二分
    (有单调性一定可以二分，能二分的不一定有单调性)
    (二分的本质是边界)
                        1 2
    |___________________| |__________________|
    l                   mid                  r
    
*/

/*
二分1边界点(满足左侧性质)
    mid = (l + r + 1) / 2;
    if (check(mid)) [mid, r];
    else            [l, mid - 1];
*/

/*
二分2边界点(满足右侧性质)
    mid = (l + r) / 2;
    if (check(mid)) [l, mid]
    else            [mid + 1, r]
*/

function check(num) {
    //判断x的性质
    return true;
}

function bSearch1(l, r) {
    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);

        if (check(mid)) 
            l = mid;
        else {
            r = mid - 1;
        }
    }
}

function bSearch2(l, r) {
    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (check(mid)) 
            r = mid;
        else {
            l = mid + 1;
        }
    }
}
